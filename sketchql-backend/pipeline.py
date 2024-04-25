import os
import sys
from data.video_data import read_primitives, read_primitives_old, read_primitives_topview_soccer
from data.visual_query import VisualQuery, generate_visual_query
from search.search import execute_qeury_multi_obj_sim_search_learned_model
from data.visualization import write_clips, visualize_query
from data.utils import stretch_objs, remove_overlap_clips_obj
from convert_vid import convert_mp4_to_h264
import shutil


def run_pipeline(dataset, query_name, model_cp_path, json_data):   
    print("running")
    if dataset == "topview_soccer":
        video_file = "data/videos/topview_soccer.mp4"
        tracking_results_file = "data/primitives/topview_soccer.pkl"
        objs_in_video_dict, objs_at_frame, centroids_at_frame = read_primitives_topview_soccer(tracking_results_file)
    elif dataset == "soccer":
        video_file = "data/videos/soccer-train-concat.mp4"
        tracking_results_file = "data/primitives/soccer-train-concat.mp4.pkl"
        objs_in_video_dict, objs_at_frame, centroids_at_frame = read_primitives(tracking_results_file)
    elif dataset == "traffic":
        video_file = "data/videos/VIRAT_S_050300_01_000148_000396.mp4"
        tracking_results_file = "data/primitives/VIRAT_S_050300_01_000148_000396.mp4.pkl"
        objs_in_video_dict, objs_at_frame = read_primitives_old(tracking_results_file, width=1920, height=1080)
    elif dataset == "bdd100k":
        video_file = "data/videos/bdd100k.mp4"
        tracking_results_file = "data/primitives/bdd100k.mp4.pkl"
        objs_in_video_dict, objs_at_frame = read_primitives_old(tracking_results_file,  width=1280, height=720)
    elif dataset == "football_ytb":
        video_file = "data/videos/football_ytb.mp4"
        tracking_results_file = "data/primitives/football_ytb.mp4.pkl"
        objs_in_video_dict, objs_at_frame = read_primitives_old(tracking_results_file,  width=1280, height=720)

    centroids_at_frame = None
    query_objs_dict, relation = generate_visual_query(query_name, json_data)

    query_objs_dict = stretch_objs(query_objs_dict, ratio=1.5)
    visualize_query(query_objs_dict, query_name)
    vquery = VisualQuery(query_objs_dict, relation)

    exe_results, all_features, probs, all_cand_seq_centroids = execute_qeury_multi_obj_sim_search_learned_model(objs_in_video_dict, objs_at_frame, centroids_at_frame, vquery, model_cp_path)

    print("Total matches after similarity search: %d"%len(exe_results))

    exe_results, probs = remove_overlap_clips_obj(exe_results, probs)
    print("Total matches after removing temporal overlaps: %d"%len(exe_results))

    exe_results = [x for _, x in sorted(zip(probs.tolist(), exe_results), key=lambda pair: -pair[0])]

    #visualize search results
    write_clips(exe_results, video_file, n=10, folder=os.path.join(dataset, query_name, "learned_model"))


if __name__ == "__main__":
    
    if len(sys.argv) != 5:
        print("correct usage: pipeline.py dataset query_name model_checkpoint json_data")
        sys.exit(1)
    dataset = sys.argv[1]
    query_name = sys.argv[2]
    model_checkpoint = sys.argv[3]
    json_data = sys.argv[4]
    
    run_pipeline(dataset, query_name, model_checkpoint, json_data)
    
    input_directory = 'output/query_results/traffic/left_turn_tldraw1/learned_model'
    output_directory = 'output/query_results/traffic/left_turn_tldraw1/changed_files'
    if os.path.isdir(output_directory):
        shutil.rmtree(output_directory)
    convert_mp4_to_h264(input_directory, output_directory)
    shutil.rmtree(input_directory)
    
    
    #run_pipeline("traffic", "car_left_turn", "data/model_checkpoint/model_cp.pt")