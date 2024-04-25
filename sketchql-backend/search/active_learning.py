import os
import numpy as np
import ast
from modAL import ActiveLearner
from model.model import EncoderModelALWrapper
from search import remove_overlap_clips
from video_data import ObjInVideo
from visualization import visualize_query, write_clips
from sklearn.ensemble import RandomForestClassifier

def custom_where(cond, x_1, x_2):
    return (cond * x_1) + ((1 - cond) * x_2)

def active_learn_weights(exe_results,X, all_cand_seq_centroids, vquery, video_file,dataset, query_name, synthetic=False, is_learned_feat = False):
    if vquery.act_learner is None:
        X_init = np.array([np.min(X, axis=0), np.max(X,axis=0)])
        y_init = [1, 0]
        if is_learned_feat:
            learner = EncoderModelALWrapper(vquery, checkpoint_path="./model_checkpoint/model_cp.pt",
    device="cuda:1")
        else:
            learner = ActiveLearner(estimator=RandomForestClassifier(class_weight="balanced"), X_training=X_init, y_training=y_init)
        vquery.act_learner = learner
    ids = np.arange(X.shape[0])
    seen_ids = set()
    while True:
        probs = np.squeeze(vquery.act_learner.predict_proba(all_cand_seq_centroids)[:, 1])
        _, _, id_pool = remove_overlap_clips(exe_results, probs, ids)
        keep_ids = []
        for idx in id_pool:
            if idx not in seen_ids:
                keep_ids.append(idx)
        id_pool = np.array(keep_ids)
        X_pool = X[id_pool]
        all_cand_seq_centroids_pool = [all_cand_seq_centroids[i] for i in id_pool]

        query_idx,_ = vquery.act_learner.query(all_cand_seq_centroids_pool)
        for idx in query_idx:
            seen_ids.add(id_pool[idx])
        #display video clip
        if synthetic:
            clip = exe_results[id_pool[query_idx[0]]]
            objs = {"obj"+str(i_obj):convert_dict_to_video_obj(clip[i_obj]) for i_obj in range(len(clip))}
            visualize_query(objs)
        else:
            for i in range(len(query_idx)):
                out_file = os.path.join('output','query_results', dataset, query_name, "active-learning-clip_"+str(i)+".mp4")
                write_clips([exe_results[id_pool[query_idx[i]]]], video_file, use_out_file=out_file, n=1)
        y = input("what are the labels:")
        if y=="exit":
            break
        else:
            ys = ast.literal_eval(y)
            Xs = X_pool[query_idx]
            seq_centroids = [all_cand_seq_centroids_pool[i] for i in query_idx]
            vquery.act_learner.teach(Xs, seq_centroids, ys)
    probs = np.squeeze(vquery.act_learner.predict_proba(all_cand_seq_centroids)[:, 1])
    return probs

def convert_format(obj):
    it_info = {}
    it_info['video_obj_id'] = obj.id
    it_info['frame_start_end'] = (obj.frame_start, obj.frame_end)
    it_info['bboxes'] = obj.boxes
    return it_info

def convert_dict_to_video_obj(d):
    obj = ObjInVideo(d['video_obj_id'])
    obj.frame_start = d['frame_start_end'][0]
    obj.frame_end = d['frame_start_end'][1]
    obj.boxes = d['bboxes']
    return obj

