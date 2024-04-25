from collections import defaultdict
from itertools import permutations, product

import numpy as np
from tqdm import tqdm
from model.model import EncoderCentroidLarger, EncoderModelWrapper
from data.utils import rotate_clip_centroids, bbox_seq_overlap, bboxes_smoothing, centroids2model_input, convert2centroids, extract_overlap_status, get_avg_bbox_size, bboxes_centroid
import torch

def normalize(x):
    if np.abs(np.min(x)-np.max(x))<10**(-4):
        return x*0
    return (x-np.min(x))/(np.max(x)-np.min(x))

def execute_qeury_multi_obj_sim_search_learned_model(objs_in_video_dict, objs_at_frame, centroids_at_frame, vquery, model_cp_path, device="cuda:0"):
    """Run the query with the learned model."""
    model = EncoderModelWrapper(checkpoint_path=model_cp_path, model= EncoderCentroidLarger(), device=device,atten_share=False,n_att=4)
    q_overlap_status = extract_overlap_status(vquery.objs_dict)

    type2obj_qeury = defaultdict(list)
    for obj_id in vquery.objs_dict:
        type2obj_qeury[vquery.objs_dict[obj_id].get_class()].append(obj_id)
    all_obj_types = list(type2obj_qeury.keys())
    
    query_centroids = convert2centroids([vquery.objs_dict[obj].boxes for obj in vquery.objs_dict])

    q_inputs = [centroids2model_input(query_centroids)]
    for _ in range(100):
        q_inputs.append(centroids2model_input(rotate_clip_centroids(query_centroids)))
    query_embeds = model.net(torch.stack(q_inputs).to(device))
    query_embed_avg = torch.mean(query_embeds,dim=0)
    ##smoothing bboxes
    for obj_id in objs_in_video_dict:
        objs_in_video_dict[obj_id].boxes = bboxes_smoothing(objs_in_video_dict[obj_id].boxes)

    # loop over each frame in the video
    all_features = []
    all_cand_seq_centroids = []
    results = []
    probs = []
    for i in tqdm(range(len(objs_at_frame))):
        # sample one in 10 frames for efficiency
        if i%10!=0:
            continue
        for scale in [0.5, 0.8, 1, 1.2, 1.5, 2]:
            n_frame = int(vquery.n_frame*scale)
            t_end = i+n_frame
            candidate_objs = []
            # for each object present at the current frame
            for obj_id in objs_at_frame[i]:
                v_obj = objs_in_video_dict[obj_id]
                if v_obj.frame_end>=t_end:
                ##only consider objs that are still there after t_end
                #if objs_in_video_dict[obj_id].frame_end>t_end:
                    box_seq = v_obj.boxes[i-v_obj.frame_start:i-v_obj.frame_start+n_frame]
                    obj_size = get_avg_bbox_size(box_seq)
                    obj_size = max(obj_size)
                    sub_stream = bboxes_centroid(box_seq)
                    #cancel frame centroid
                    if centroids_at_frame is not None:
                        sub_stream = sub_stream - centroids_at_frame[i:i+n_frame]
                    motion = np.sqrt((np.max(sub_stream[:, 0]) - np.min(sub_stream[:, 0])) ** 2 + (
                                np.max(sub_stream[:, 1]) - np.min(sub_stream[:, 1])) ** 2)
                    if motion < obj_size:
                        continue
                    candidate_objs.append(obj_id)
            type2obj_seq = defaultdict(list)
            for obj_id in candidate_objs:
                type2obj_seq[objs_in_video_dict[obj_id].get_class()].append(obj_id)

            ##check if there is enough objects in frame, if yes, gen all possible objs alignments
            to_continue = False
            obj_type_align = {}
            for obj_type in type2obj_qeury:
                if len(type2obj_seq[obj_type]) < len(type2obj_qeury[obj_type]):
                    to_continue = True
                    break
                obj_type_align[obj_type] = list(permutations(type2obj_seq[obj_type],len(type2obj_qeury[obj_type])))
            if to_continue:
                continue
            cand_obj_align = product(*list(obj_type_align.values()))
            seq_model_input_list = []
            for obj_ids in cand_obj_align:
                obj_id_map_q2v = {}
                for i_type in range(len(all_obj_types)):
                    for i_obj in range(len(type2obj_qeury[all_obj_types[i_type]])):
                        obj_q = type2obj_qeury[all_obj_types[i_type]][i_obj]
                        obj_id_map_q2v[obj_q] = obj_ids[i_type][i_obj]
                seq_bboxes = []
                for obj_q in vquery.objs_dict:
                    v_obj = objs_in_video_dict[obj_id_map_q2v[obj_q]]
                    boxes_in_seq = np.copy(v_obj.boxes[i-v_obj.frame_start:i-v_obj.frame_start+n_frame])
                    #cancel frame centroid
                    if centroids_at_frame is not None:
                        boxes_in_seq[:,:2] = boxes_in_seq[:,:2] - centroids_at_frame[i:i+n_frame]
                        boxes_in_seq[:,2:] = boxes_in_seq[:,2:] - centroids_at_frame[i:i+n_frame]
                    seq_bboxes.append(boxes_in_seq)
                
                #check if overlap non-overlap align
                overlap_relation_aligned = True
                q_ids = list(vquery.objs_dict.keys())
                for i_obj in range(len(q_ids)):
                    if not overlap_relation_aligned:
                        break
                    for j_obj in range(i_obj+1, len(q_ids)):
                        if q_overlap_status[(q_ids[i_obj], q_ids[j_obj])]:
                            if not bbox_seq_overlap(seq_bboxes[i_obj], seq_bboxes[j_obj]):
                                overlap_relation_aligned = False
                                break
                if not overlap_relation_aligned:
                    continue
                seq_model_centroid = convert2centroids(seq_bboxes)
                seq_model_input = centroids2model_input(seq_model_centroid)
                all_cand_seq_centroids.append(seq_model_centroid)
                seq_model_input_list.append(seq_model_input)
                results.append((obj_id_map_q2v.values(), i, t_end))
            if len(seq_model_input_list)==0:
                continue
            all_features.extend(seq_model_input_list)
            seq_model_input_batch = torch.stack(seq_model_input_list)
            seq_model_input_batch_embd = model.predict_embed(seq_model_input_batch)
            pred = torch.nn.functional.cosine_similarity(query_embed_avg, seq_model_input_batch_embd)
            pred = pred.detach().cpu().numpy()
            probs.append(pred)
    probs = np.concatenate(probs)
    results_with_data = []
    for i in range(len(results)):
        it = results[i]
        results_with_data.append([])
        for v_obj_id in it[0]:
            rst_dict = {}
            rst_dict['video_obj_id'] = v_obj_id
            rst_dict['frame_start_end'] = (it[1], it[2])
            obj_frame_start = objs_in_video_dict[v_obj_id].frame_start
            rst_dict["bboxes"] = objs_in_video_dict[v_obj_id].boxes[it[1]-obj_frame_start:it[2]-obj_frame_start]
            rst_dict["obj_type"] = objs_in_video_dict[v_obj_id].types[0]
            results_with_data[-1].append(rst_dict)
    all_features = torch.stack(all_features).numpy()
    return results_with_data, all_features, probs, all_cand_seq_centroids

