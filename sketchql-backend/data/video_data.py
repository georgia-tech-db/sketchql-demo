import copy
import pickle
from collections import Counter
import  numpy as np
from data.utils import bboxes_centroid, get_avg_bbox_size

class ObjInVideo:
    def __init__(self,id):
        self.id = id
        self.frame_start = None
        self.frame_end = None
        self.start_type = None #start with out of screen
        self.end_type = None #start with out of screen or occluded by another obj
        self.boxes = []
        # TODO: types and obj_class seem redundant - when will types list have more than one type of object?
        self.types = []
        self.obj_class = None

    def get_class(self):
        if self.obj_class:
            return self.obj_class
        cnt = Counter(self.types)
        self.obj_class = cnt.most_common(1)[0][0]
        return self.obj_class

    def get_avg_bbox_size(self):
        return get_avg_bbox_size(self.boxes)

    def get_centroids(self):
        centroids = bboxes_centroid(self.boxes)
        return centroids

    def __len__(self):
        return len(self.boxes)

#classes in bytetrack
CLASSES = ["person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck", "boat", "traffic light", "fire hydrant", "stop sign", "parking meter", "bench", "bird", "cat", "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra", "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee", "skis", "snowboard", "sports",
                 "ball", "kite", "baseball", "bat", "baseball glove", "skateboard", "surfboard", "tennis", "racket",
                 "bottle", "wine", "glass", "cup", "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich",
                 "orange", "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch", "potted plant",
                 "bed", "dining table", "toilet", "tv", "laptop", "mouse", "remote", "keyboard", "cell",
                 "phone", "microwave", "oven", "toaster", "sink", "refrigerator", "book", "clock", "vase", "scissors",
                 "teddy bear", "hair drier", "toothbrush"]

GAME_CLASSES = ["pl_left", "pl_right", "gk_left", "gk_right", "ball", "referee", "other"]
frame_max_x = 1920
frame_max_y = 1080


def get_unique_object_count(data):
    unique_objs = set()
    for i in range(len(data)):
        i_data = data[i]
        for j in range(len(i_data['game_labels'])):
            obj_id = int(i_data['ids'][j])
            unique_objs.add(obj_id)
    all_objs = list(unique_objs)
    assert(all_objs == list(np.arange(len(all_objs))))
    return len(unique_objs)


def get_obj_chunks(all_obj_frames):
    chunks = []
    chunk_start = all_obj_frames[0]
    prev = all_obj_frames[0]
    for i in range(1, len(all_obj_frames)):
        if all_obj_frames[i] == (prev + 1):
            prev = all_obj_frames[i]
            continue
        else:
            chunks.append((chunk_start, prev))
        chunk_start = all_obj_frames[i]
        prev = all_obj_frames[i]
    chunks.append((chunk_start, prev))
    return chunks


def get_modified_object_id_mapping(data):
    # chunkize object tracks
    all_objs = {}
    for i in range(len(data)):
        i_data = data[i]
        i_frame = i_data['frame_id']
        for j in range(len(i_data['game_labels'])):
            obj_id = int(i_data['ids'][j])
            if obj_id not in all_objs:
                all_objs[obj_id] = [i_frame]
            else:
                all_objs[obj_id].append(i_frame)

    all_obj_chunks = {}
    obj_count = 0
    # store chunks for each object in a dictionary
    for obj_id in sorted(all_objs):
        chunks = get_obj_chunks(all_objs[obj_id])
        obj_count += len(chunks)
        all_obj_chunks[obj_id] = chunks
    # end chunkize
    # create new object ids for later chunks
    obj_counter = get_unique_object_count(data)
    obj_id_map = {}
    for obj_id in sorted(all_obj_chunks):
        chunks = all_obj_chunks[obj_id]
        obj_id_map[obj_id] = [obj_id]
        for chunk in chunks[1:]:
            obj_id_map[obj_id].append(obj_counter)
            obj_counter += 1
    return obj_id_map, all_obj_chunks


def get_object_chunk_id(all_obj_chunks, obj_id, i_frame):
    chunks = all_obj_chunks[obj_id]
    for i, chunk in enumerate(chunks):
        if i_frame >= chunk[0] and i_frame <= chunk[1]:
            chunk_id = i
            break
    return chunk_id


def modify_obj_ids(data):\
    # mapping between (obj_id, chunk_id) -> new_obj_id
    obj_id_mapping, all_obj_chunks = get_modified_object_id_mapping(data)
    new_data = copy.deepcopy(data)
    for i in range(len(data)):
        i_data = data[i]
        i_frame = i_data['frame_id']
        for j in range(len(i_data['game_labels'])):
            obj_class = i_data['game_labels'][j]
            obj_id = int(i_data['ids'][j])
            # find the chunk to which the current obj occurrence belongs
            chunk_id = get_object_chunk_id(all_obj_chunks, obj_id, i_frame)
            # use the mapping to get new object id for this chunk
            new_obj_id = obj_id_mapping[obj_id][chunk_id]
            new_data[i]['ids'][j] = str(new_obj_id)
    return new_data


def read_primitives_topview_soccer(path):
    with open(path,'rb') as f:
        data = pickle.load(f)
    all_objs = {}
    objs_at_frame = []
    centroids_at_frame = []
    ball_id = 999999
    for i in range(len(data)):
        i_data = data[i]

        centroids_in_frame = []
        for j in range(len(i_data['game_labels'])):
            bbox = i_data['bboxes'][j]
            centroids_in_frame.append(((bbox[0]+bbox[2])/2, (bbox[1]+bbox[3])/2))
        centroids_at_frame.append(np.median(np.array(centroids_in_frame),axis=0))

        i_frame = i_data['frame_id']
        objs_at_frame.append([])
        for j in range(len(i_data['game_labels'])):
            obj_class = i_data['game_labels'][j]
            obj_id = i_data['ids'][j]

            if obj_id not in all_objs:
                obj = ObjInVideo(obj_id)
                obj.frame_start = i
                all_objs[obj_id] = obj
            objs_at_frame[-1].append(obj_id)
            bbox = i_data['bboxes'][j]
            if all_objs[obj_id].frame_end is None or all_objs[obj_id].frame_end==i-1:
                all_objs[obj_id].frame_end = i
                all_objs[obj_id].boxes.append((bbox[0],bbox[1],bbox[2],bbox[3]))
                all_objs[obj_id].types.append(obj_class)
    for obj_id in all_objs:
        all_objs[obj_id].get_class()
        assert all_objs[obj_id].frame_end-all_objs[obj_id].frame_start ==len(all_objs[obj_id].boxes)-1
    return all_objs, objs_at_frame, None

def read_primitives(path):
    """Read object tracking results from the primitives file

    Args:
        path (str): path of the primitives (pkl) file

    Returns:
        all_objs: dict of objects of type ObjsInVideo
                    Key = object_id
                    Length = no.of objects in the video
        objs_at_frame: 2d list of all the objects (ids) at each frame in the video
                    Length = no.of frames in the video
    """
    with open(path,'rb') as f:
        data = pickle.load(f)
    # for soccernet dataset
    data = modify_obj_ids(data)
    all_objs = {}
    objs_at_frame = []
    centroids_at_frame = []
    ball_id = 999999
    for i in range(len(data)):
        i_data = data[i]

        centroids_in_frame = []
        for j in range(len(i_data['game_labels'])):
            bbox = i_data['bboxes'][j]
            centroids_in_frame.append(((bbox[0]+bbox[2])/2, (bbox[1]+bbox[3])/2))
        centroids_at_frame.append(np.median(np.array(centroids_in_frame),axis=0))

        i_frame = i_data['frame_id']
        objs_at_frame.append([])
        # for j in range(len(i_data['labels'])):
        #     obj_class = CLASSES[int(i_data['labels'][j])]
        # for soccernet dataset
        for j in range(len(i_data['game_labels'])):
            obj_class = i_data['game_labels'][j]
            obj_id = int(i_data['ids'][j])

            # if obj_class in ['ball', "sports"]:
                # obj_id = ball_id #override id for ball
                # obj_class = 'ball'
            if obj_id not in all_objs:
                obj = ObjInVideo(obj_id)
                obj.frame_start = i
                all_objs[obj_id] = obj
            objs_at_frame[-1].append(obj_id)
            bbox = i_data['bboxes'][j]
            if all_objs[obj_id].frame_end is None or all_objs[obj_id].frame_end==i-1:
                all_objs[obj_id].frame_end = i
                all_objs[obj_id].boxes.append((bbox[0],bbox[1],bbox[2],bbox[3]))
                all_objs[obj_id].types.append(obj_class)
            # else: #interpolate in case of lost frames
            #     if obj_class == "ball":
            #         ball_size = get_avg_bbox_size(all_objs[obj_id].boxes)
            #         ball_size = max(ball_size)
            #         if abs(all_objs[obj_id].boxes[-1][0]-bbox[0])>10*ball_size:#don't interpolate if ball too far
            #             ball_id += 1
            #             continue
            #     else:
            #         if i - all_objs[obj_id].frame_end>30: #don't interpolate if gap too large
            #             continue
            #     old_box = all_objs[obj_id].boxes[-1]
            #     for k in range(all_objs[obj_id].frame_end+1, i+1):
            #         inter_box = []
            #         for dim in range(4):
            #             v = (bbox[dim]-old_box[dim])/(i-all_objs[obj_id].frame_end)*(k-all_objs[obj_id].frame_end)+old_box[dim]
            #             inter_box.append(v)
            #         all_objs[obj_id].boxes.append(tuple(inter_box))
            #         all_objs[obj_id].types.append(obj_class)
            #         all_objs[obj_id].frame_end = k
    for obj_id in all_objs:
        all_objs[obj_id].get_class()
        assert all_objs[obj_id].frame_end-all_objs[obj_id].frame_start ==len(all_objs[obj_id].boxes)-1
    return all_objs, objs_at_frame, np.array(centroids_at_frame)

def is_bbox_at_boundary(bbox, width, height):
    x_min, x_max = bbox[0], bbox[2]
    y_min, y_max = bbox[1], bbox[3]
    threshold = 3
    if x_min<threshold or y_min < threshold or width-x_max < threshold or height-y_max<threshold:
        return True
    return False

def read_primitives_old(path, width, height):
    with open(path,'rb') as f:
        data = pickle.load(f)
    all_objs = {}
    objs_at_frame = []
    for i in range(len(data)):
        i_data = data[i]

        i_frame = i_data['frame_id']
        objs_at_frame.append([])
        for j in range(len(i_data['labels'])):
            bbox = i_data['bboxes'][j]
            if is_bbox_at_boundary(bbox, width, height):
                continue
            obj_class = CLASSES[int(i_data['labels'][j])]
            obj_id = int(i_data['ids'][j])
            objs_at_frame[-1].append(obj_id)
            if obj_id not in all_objs:
                obj = ObjInVideo(obj_id)
                obj.frame_start = i
                all_objs[obj_id] = obj
            
            if all_objs[obj_id].frame_end is None or all_objs[obj_id].frame_end==i-1:
                all_objs[obj_id].frame_end = i
                all_objs[obj_id].boxes.append((bbox[0],bbox[1],bbox[2],bbox[3]))
                all_objs[obj_id].types.append(obj_class)
            else: #interpolate in case of lost frames
                old_box = all_objs[obj_id].boxes[-1]
                for k in range(all_objs[obj_id].frame_end+1, i+1):
                    inter_box = []
                    for dim in range(4):
                        v = (bbox[dim]-old_box[dim])/(i-all_objs[obj_id].frame_end)*(k-all_objs[obj_id].frame_end)+old_box[dim]
                        inter_box.append(v)
                    all_objs[obj_id].boxes.append(tuple(inter_box))
                    all_objs[obj_id].types.append(obj_class)
                    all_objs[obj_id].frame_end = k

    for obj_id in all_objs:
        all_objs[obj_id].get_class()
        assert all_objs[obj_id].frame_end-all_objs[obj_id].frame_start ==len(all_objs[obj_id].boxes)-1
    return all_objs, objs_at_frame
