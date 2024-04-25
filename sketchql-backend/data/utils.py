from collections import defaultdict
from model.utils import normalize_flatten_data_centroid
from data.visualization import canvas_max_x, canvas_max_y
import random
import math
import numpy as np
import torch

def rotate_by_orgin(origin, point, angle):
    """
    Rotate a point counterclockwise by a given angle around a given origin.

    The angle should be given in radians.
    """
    ox, oy = origin
    px, py = point

    qx = ox + math.cos(angle) * (px - ox) - math.sin(angle) * (py - oy)
    qy = oy + math.sin(angle) * (px - ox) + math.cos(angle) * (py - oy)
    return qx, qy

def rotate_centroids(centroids, angle, origin):
    new_centroids = []
    for i in range(len(centroids)):
        p = rotate_by_orgin(origin, (centroids[i][0], centroids[i][1]), angle)
        new_centroids.append(p)
    return np.array(new_centroids)

def rotate_clip_centroids(centroids, degree=None):
    if degree is None:
        degree = random.randint(0,360)
    angle = (degree-180)/180*math.pi#(random.randint(0,90)-45)/180*math.pi
    origin = np.mean(centroids, axis=(0, 1))
    new_centroids = []
    for i in range(centroids.shape[0]):
        new_centroids.append(rotate_centroids(centroids[i], angle, origin))
    return np.array(new_centroids)

def get_avg_bbox_size(boxes):
    boxes = np.array(boxes)
    width = np.median(boxes[:, 2] - boxes[:, 0])
    height = np.median(boxes[:, 3] - boxes[:, 1])
    return (width, height)

def dist(p1, p2):
    return np.sqrt((p1[0]-p2[0])**2+(p1[1]-p2[1])**2)

def bboxes_centroid(boxes):
    boxes = np.array(boxes)
    centroids = np.zeros(shape=(boxes.shape[0], 2))
    centroids[:, 0] = (boxes[:, 0] + boxes[:, 2]) / 2
    centroids[:, 1] = (boxes[:, 1] + boxes[:, 3]) / 2
    return centroids

def bboxes_smoothing(boxes):
    boxes = np.array(boxes)
    boxes_smoothed = np.copy(boxes)
    smoothing_window = 10
    for i in range(len(boxes)):
        l = max(0, i-smoothing_window//2)
        r = min(len(boxes), i+smoothing_window//2)
        boxes_smoothed[i] = np.median(boxes[l:r], axis=0)
    return boxes_smoothed

def bbox_distance(rec1, rec2):
    (x1, y1, x1b, y1b) = rec1
    (x2, y2, x2b, y2b) = rec2
    left = x2b < x1
    right = x1b < x2
    bottom = y2b < y1
    top = y1b < y2
    if top and left:
        return dist((x1, y1b), (x2b, y2))
    elif left and bottom:
        return dist((x1, y1), (x2b, y2b))
    elif bottom and right:
        return dist((x1b, y1), (x2, y2b))
    elif right and top:
        return dist((x1b, y1b), (x2, y2))
    elif left:
        return x1 - x2b
    elif right:
        return x2 - x1b
    elif bottom:
        return y1 - y2b
    elif top:
        return y2 - y1b
    else:             # rectangles intersect
        return 0

def bbox_seq_overlap(seq1, seq2):
    for i in range(len(seq1)):
        if bbox_distance(seq1[i], seq2[i])==0:
            return True
    return False

def shift(boxes, deltas=None):
    if deltas is None:
        xs = [it[0] for it in boxes]
        ys = [it[1] for it in boxes]
        x_range = int(max(xs)-min(xs))
        y_range =int(max(ys)-min(ys))
        delta_x = random.randint(0, canvas_max_x-x_range)-int(min(xs))
        delta_y = random.randint(0, canvas_max_y-y_range)-int(min(ys))
    else:
        delta_x,delta_y = deltas
    new_boxes = [(it[0]+delta_x, it[1]+delta_y, it[2]+delta_x, it[3]+delta_y) for it in boxes]
    return new_boxes, (delta_x,delta_y)

def mirror(boxes, byaxis=None):
    if byaxis is None:
        byaxis = "x" if random.random()<0.5 else "y"
    if byaxis == "x":
        new_boxes = [(it[0], canvas_max_y-it[1], it[2], canvas_max_y-it[3]) for it in boxes]
    else:
        new_boxes = [(canvas_max_x-it[0], it[1], canvas_max_x-it[2], it[3]) for it in boxes]
    return new_boxes, byaxis

def rotate_by_orgin(origin, point, angle):
    """
    Rotate a point counterclockwise by a given angle around a given origin.

    The angle should be given in radians.
    """
    ox, oy = origin
    px, py = point

    qx = ox + math.cos(angle) * (px - ox) - math.sin(angle) * (py - oy)
    qy = oy + math.sin(angle) * (px - ox) + math.cos(angle) * (py - oy)
    return qx, qy

def rotate(boxes, angle=None):
    if angle is None:
        angle = (random.randint(0,90)-45)/180*math.pi
    xs = [it[0] for it in boxes]
    ys = [it[1] for it in boxes]
    origin = np.mean(xs), np.mean(ys)
    new_boxes = []
    for i in range(len(boxes)):
        p1 = rotate_by_orgin(origin, (boxes[i][0], boxes[i][1]), angle)
        p2 = (p1[0]+boxes[i][2]-boxes[i][0],p1[1]+boxes[i][3]-boxes[i][1] )
        #p2 = rotate_by_orgin(origin, (boxes[i][2], boxes[i][3]), angle)
        new_boxes.append((p1[0], p1[1], p2[0], p2[1]))
    return new_boxes, angle


def interpolate(inp, fi):
    i, f = int(fi // 1), fi % 1  # Split floating-point index into whole & fractional parts.
    j = i+1 if f > 0 else i  # Avoid index error.
    return (1-f) * inp[i] + f * inp[j]

def stretch(boxes, ratio=None):
    if ratio is None:
        ratio = random.random()*0.5+1
    coords = [[it[i] for it in boxes] for i in range(4)]
    new_coords = []
    new_len = int(ratio*len(boxes))
    delta = (len(boxes) - 1) / (new_len - 1)
    for j in range(4):
        outp = [interpolate(coords[j], i * delta) for i in range(new_len-1)]
        new_coords.append(outp)
    new_boxes = [(new_coords[0][i],new_coords[1][i], new_coords[2][i], new_coords[3][i]) for i in range(new_len-1)]
    return new_boxes, ratio

def noise(boxes, max_ratio=None):
    box_size = get_avg_bbox_size(boxes)
    box_size = min(box_size)
    if max_ratio is None:
        max_ratio = random.random()
    new_boxes = []
    for it in boxes:
        noise_x = box_size*max_ratio*(random.random()-0.5)
        noise_y = box_size*max_ratio*(random.random()-0.5)
        new_boxes.append((noise_x+it[0],noise_y+it[1], noise_x+it[2], noise_y+it[3]))
    return new_boxes, max_ratio

def stretch_objs(objs, ratio):
    for v_obj_id in objs:
        new_boxes, _ = stretch(objs[v_obj_id].boxes, ratio=ratio)
        objs[v_obj_id].frame_end = objs[v_obj_id].frame_end + len(new_boxes) - len(objs[v_obj_id].boxes)
        objs[v_obj_id].boxes = new_boxes
    return objs


def check_overlap(box1, box2):
    x1, y1, x2, y2 = box1
    x1b, y1b, x2b, y2b = box2
    if x1b > x2 or x2b < x1 or y1b > y2 or y2b < y1:
        return False
    else:
        return True


def check_lower_quarter(pl_box, ball_box):
    x1, y1, x2, y2 = pl_box
    x1b, y1b, x2b, y2b = ball_box
    if x1b > x2 or x2b < x1 or y1b > y2 or y2b < y1 or y2b < (y1+0.75*(y2-y1)):
        return False
    else:
        return True


def check_ball_pause(track1, track2):
    pass


def post_process_results(exe_results, query_name):
    no_overlap_results = []
    no_lower_quarter_results = []
    final_results = []
    if 'consecutive_kick_ball' in query_name:
        for result in exe_results:
            # apply filters to remove certain obvious false positives
            ball_track = [item for item in result if item['obj_type'] == 'ball'][0]
            pl_tracks = [item for item in result if 'pl' in item['obj_type']]
            # filter 1 - check overlap between ball and player
            no_overlap = False
            no_lower_quarter = False
            for pl in pl_tracks:
                pl_ball_overlap = [check_overlap(pl['bboxes'][i], ball_track['bboxes'][i]) for i in range(pl['frame_start_end'][1]-pl['frame_start_end'][0])]
                if not any(pl_ball_overlap):
                    no_overlap_results.append(result)
                    no_overlap = True
                    break
            if not no_overlap:
                # filter 2 - check if ball intersects with lower quarter of player at least once
                for pl in pl_tracks:
                    pl_ball_lower_quarter = [check_lower_quarter(pl['bboxes'][i], ball_track['bboxes'][i]) for i in range(pl['frame_start_end'][1]-pl['frame_start_end'][0])]
                    if not any(pl_ball_lower_quarter):
                        no_lower_quarter_results.append(result)
                        no_lower_quarter = True
                        break
                if not no_lower_quarter:
                    final_results.append(result)

        return final_results, no_overlap_results, no_lower_quarter_results
    else:
        return exe_results, [], []
    

def convert2centroids(bbox_list):
    min_len = min([len(it) for it in bbox_list])
    bbox_list = [it[:min_len] for it in bbox_list]
    centroid_list = []
    for boxes in bbox_list:
        boxes = np.array(boxes)
        centroids = np.zeros(shape=(boxes.shape[0], 2))
        centroids[:, 0] = (boxes[:, 0] + boxes[:, 2]) / 2
        centroids[:, 1] = (boxes[:, 1] + boxes[:, 3]) / 2
        centroid_list.append(centroids)
    centroids = np.array(centroid_list)
    return centroids

def centroids2model_input(centroids):
    centroid_size_flat = normalize_flatten_data_centroid(centroids)
    centroid_size_flat = torch.from_numpy(centroid_size_flat).float()
    return centroid_size_flat

def convert2model_input(bbox_list):
    centroids = convert2centroids(bbox_list)
    return centroids2model_input(centroids)


def extract_overlap_status(obj_dict):
    olp_status = {}
    for obj1 in obj_dict:
        for obj2 in obj_dict:
            if obj1 == obj2:
                continue
            olp_status[(obj1, obj2)] = bbox_seq_overlap(obj_dict[obj1].boxes, obj_dict[obj2].boxes)
    return olp_status


def remove_overlap_clips_obj(results, probs):
    #group by obj ids
    ids2rst = defaultdict(list)
    for rst, p in zip(results, probs.tolist()):
        ids = []
        for it in rst:
            ids.append(it['video_obj_id'])
        ids.sort()
        ids2rst[tuple(ids)].append((rst,p))
    results_non_overlap_all = []
    probs_non_overlap_all = []
    for ids in ids2rst:
        results_non_overlap = []
        probs_non_overlap = []
        for rst, p in ids2rst[ids]:
            overlap_ratio = 0
            if len(results_non_overlap)>0:
                if results_non_overlap[-1][0]["frame_start_end"][1]>rst[0]["frame_start_end"][0]:
                    overlap = (results_non_overlap[-1][0]["frame_start_end"][1] - rst[0]["frame_start_end"][0])
                    overlap_ratio = overlap/(results_non_overlap[-1][0]["frame_start_end"][1]-results_non_overlap[-1][0]["frame_start_end"][0])
            if overlap_ratio<0.5:
                results_non_overlap.append(rst)
                probs_non_overlap.append(p)
            else:
                if p>probs_non_overlap[-1]:
                    probs_non_overlap[-1] = p
                    results_non_overlap[-1] = rst
        results_non_overlap_all.extend(results_non_overlap)
        probs_non_overlap_all.extend(probs_non_overlap)
    results = results_non_overlap_all
    probs = np.array(probs_non_overlap_all)
    return results, probs
