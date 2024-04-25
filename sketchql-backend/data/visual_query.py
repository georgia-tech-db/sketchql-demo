import numpy as np
import math
from data.video_data import ObjInVideo
import json

def pad_lists(json_data):
    keys = list(json_data.keys())

    if len(keys) == 1:
        return json_data
    
    k1_data = json_data.get(keys[0], [])
    k2_data = json_data.get(keys[1], [])

    last_item_key1 = k1_data[-1] if len(k1_data) > 0 else None
    last_item_key2 = k2_data[-1] if len(k2_data) > 0 else None
    
    diff_length = len(k1_data) - len(k2_data)
    
    k1_data.extend([last_item_key1] * max(0, -diff_length))
    k2_data.extend([last_item_key2] * max(0, diff_length))

    if len(k1_data) > len(k2_data):
        shorter_list = k2_data
        longer_list = k1_data
    else:
        shorter_list = k1_data
        longer_list = k2_data

    shorter_last_end_time = shorter_list[-1].get('endTime') if shorter_list else None
    longer_last_end_time = longer_list[-1].get('endTime') if longer_list else None

    if shorter_last_end_time is not None and longer_last_end_time is not None:
        shorter_list[-1]['endTime'] = longer_last_end_time

    json_data[keys[0]] = k1_data
    json_data[keys[1]] = k2_data

    return json_data


def generate_bounding_boxes(json_data, w, h):  
    objs_dict = {}
    width = 50
    height = 50
    relation = []
    data = json.loads(json_data)
    
    pad_lists(data)

    # extract bounding box coordinates and timestamps
    for key, entries in data.items():
        bounding_boxes = []
        for item in entries:
            point = item['point']
            # change width and height based on tldraw input
            x_center, y_center = point
            width = w  
            height = h 
            # Calculate the top-left and bottom-right corners
            x_min = x_center - width/2
            y_min = y_center - height/2
            x_max = x_center + width/2
            y_max = y_center + height/2
            bounding_boxes.append((x_min, y_min, x_max, y_max))
        objs_dict[key] = bounding_boxes

    return objs_dict

def generate_bounding_boxes_json_file(json_file, w, h):  
    objs_dict = {}
    width = 50
    height = 50
    relation = []
    
    with open(json_file, 'r') as file:
        data = json.load(file)
    
    pad_lists(data)
    
    for key, entries in data.items():
        bounding_boxes = []
        for item in entries:
            point = item['point']
            x_center, y_center = point
            width = w  
            height = h 
            x_min = x_center - width/2
            y_min = y_center - height/2
            x_max = x_center + width/2
            y_max = y_center + height/2
            bounding_boxes.append((x_min, y_min, x_max, y_max))
        objs_dict[key] = bounding_boxes

    return objs_dict

def json_to_visual_query(name):
    objs_dict = {}
    width = 50
    height = 50
    relation = []
    
    if "left_turn_tldraw1" == name:
        obj_counter = 1
        obj_boxes_dict = generate_bounding_boxes('/nethome/dshah371/sketchql-backend/json_files/pm_test.json', 50, 50)
        for key, value in obj_boxes_dict.items():
            obj = ObjInVideo(f"obj{obj_counter}")
            obj.frame_start = 0
            obj.frame_end = len(value) - 1
            obj.types = ['car'] * len(value)
            obj.boxes = value
            objs_dict[f"obj{obj_counter}"] = obj
            obj_counter += 1
        print(objs_dict)
        
    return objs_dict, relation
    
    

def generate_visual_query(name, json_data):
    objs_dict = {}
    width = 50
    height = 50
    relation = []

    if "carstop_personwalk" == name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 750
        obj1.types = ['car']*750
        obj1.boxes = [(0, 500, 0+width, 500+height)]
        for i in range(250):
            obj1.boxes.append((i*2, 500, i*2+width, 500+height))
        for i in range(500):
            obj1.boxes.append((249*2, 500, 249*2+width, 500+height))
        objs_dict['obj1'] = obj1

        obj2 = ObjInVideo('obj2')
        obj2.frame_start = 0
        obj2.frame_end = 750
        obj2.types = ['person'] * 500
        obj2.boxes = [(600, 150, 600+width, 150+height)]
        for i in range(750):
            obj2.boxes.append((600, 150+i, 600+width, 150+i+height))
        objs_dict['obj2'] = obj2

    if "car_left_turn" == name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 200
        obj1.types = ['car']*200
        obj1.boxes = [(200, 600, 200+width, 600+height)]
        for i in range(50):
            obj1.boxes.append((200+i*2, 600, 200+i*2+width, 600+height))
        for i in range(90):
            r = 50
            obj1.boxes.append((300 + r*math.sin(i/90*math.pi/2), 600-r*(1-math.cos(i/90*math.pi/2)),
                               300 + r*math.sin(i/90*math.pi/2)+width, 600-r*(1-math.cos(i/90*math.pi/2)) + height))
        for i in range(60):
            obj1.boxes.append((350, 550-i*2, 350+width, 550-i*2+height))
        objs_dict['obj1'] = obj1

    if "car_left_right_turn" in name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 180
        obj1.types = ['car']*180
        obj1.boxes = [(200, 200, 200+width, 200+height)]
        for i in range(60):
            obj1.boxes.append((200+i*2, 200, 200+i*2+width, 200+height))
        for i in range(60):
            obj1.boxes.append((obj1.boxes[-1][0], obj1.boxes[-1][1]-2, obj1.boxes[-1][2], obj1.boxes[-1][3]-2))
        
        for i in range(60):
            obj1.boxes.append((obj1.boxes[-1][0]+2, obj1.boxes[-1][1], obj1.boxes[-1][2]+2, obj1.boxes[-1][3]))
        objs_dict['obj1'] = obj1


        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 380
        obj1.types = ['car']*300
        obj1.boxes = [(100, 500, 100+width, 500+height)]
        for i in range(100):
            obj1.boxes.append((100+i*2, 500, 100+i*2+width, 500+height))
        for i in range(180):
            r = 50
            obj1.boxes.append((300 + r*math.sin(i/90*math.pi/2), 500-r*(1-math.cos(i/90*math.pi/2)),
                               300 + r*math.sin(i/90*math.pi/2)+width, 500-r*(1-math.cos(i/90*math.pi/2)) + height))

        for i in range(100):
            obj1.boxes.append((300-i*2, 400, 300-i*2+width, 400+height))
        objs_dict['obj1'] = obj1

    if "kick_ball" == name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 120
        obj1.types = ['pl_right'] * 60
        obj1.boxes =[]# [(100, 450, 50 + width, 450 + height)]
        for i in range(0, 30):
            obj1.boxes.append((50 + i * 5, 450 + i * 5, 50 + i * 5 + width, 450 + height + i * 5))
        for i in range(0, 90):
            obj1.boxes.append((50 + 29 * 5, 450 + 29 * 5, 50 + 29 * 5 + width, 450 + height + 29 * 5))
        objs_dict['obj1'] = obj1
        obj2 = ObjInVideo('obj2')
        obj2.frame_start = 0
        obj2.frame_end = 120
        obj2.types = ['ball'] * 60
        obj2.boxes = []#[(50 + 29 * 5, 450 + 29 * 5, 50 + 29 * 5 + width, 450 + height + 29 * 5)]
        for i in range(0, 30):
            obj2.boxes.append((50 + 29 * 5+(29-i)*5, 450 + 29 * 5, 50 + 29 * 5+(29-i)*5 + width, 450 + height + 29 * 5))
        for i in range(0, 90):
            obj2.boxes.append((50 + 29 * 5+i*5, 450 + 29 * 5+i*5, 50 + 29 * 5 + width+i*5, 450 + height + 29 * 5+i*5))
        objs_dict['obj2'] = obj2
        relation = [('obj1', 'obj2'), ('obj2', 'obj1')]

    if "kick_ball_in_the_air" == name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 100
        obj1.types = ['pl_right'] * 100
        obj1.boxes =[]# [(100, 450, 50 + width, 450 + height)]
        for i in range(0, 30):
            obj1.boxes.append((50 + i * 5, 150 + i * 5, 50 + i * 5 + width, 150 + height + i * 5))
        for i in range(0, 70):
            obj1.boxes.append((50 + 29 * 5, 150 + 29 * 5, 50 + 29 * 5 + width, 150 + height + 29 * 5))
        objs_dict['obj1'] = obj1
        obj2 = ObjInVideo('obj2')
        obj2.frame_start = 0
        obj2.frame_end = 100
        obj2.types = ['ball'] * 100
        obj2.boxes = []#[(50 + 29 * 5, 450 + 29 * 5, 50 + 29 * 5 + width, 450 + height + 29 * 5)]
        for i in range(0, 30):
            obj2.boxes.append((50 + 29 * 5+(29-i)*5, 150 + 29 * 5, 50 + 29 * 5+(29-i)*5 + width, 150 + height + 29 * 5))
        for i in range(0, 70):
            x = 50 + 29 * 5 + i * 5
            y = 150 + 29 * 5 - 40 + (i-20) ** 2 / 10
            obj2.boxes.append((x, y, x + width, y + height))  
            # obj2.boxes.append((50 + 29 * 5+i*5, 450 + 29 * 5+i*5, 50 + 29 * 5 + width+i*5, 450 + height + 29 * 5+i*5))
        objs_dict['obj2'] = obj2
        relation = [('obj1', 'obj2'), ('obj2', 'obj1')]

    if "intercept_ball" == name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 200
        obj1.types = ['pl_left'] * 200
        obj1.boxes = [(100, 500, 100 + width, 500 + height)]
        for i in range(1, 200):
            obj1.boxes.append((obj1.boxes[-1][0]+1, obj1.boxes[-1][1], obj1.boxes[-1][2]+1, obj1.boxes[-1][3]))
        objs_dict['obj1'] = obj1

        obj2 = ObjInVideo('obj2')
        obj2.frame_start = 0
        obj2.frame_end = 200
        obj2.types = ['ball'] * 200
        obj2.boxes = [(100, 500, 100 + width, 500 + height)]
        for i in range(1, 100):
            obj2.boxes.append((obj2.boxes[-1][0]+3, obj2.boxes[-1][1], obj2.boxes[-1][2]+3, obj2.boxes[-1][3]))
        for i in range(100):
            obj2.boxes.append((obj2.boxes[-1][0]-3, obj2.boxes[-1][1]+3, obj2.boxes[-1][2]-3, obj2.boxes[-1][3]+3))
        objs_dict['obj2'] = obj2

        obj3 = ObjInVideo('obj3')
        obj3.frame_start = 0
        obj3.frame_end = 200
        obj3.types = ['pl_left'] * 200
        obj3.boxes = [(600, 500, 600 + width, 500 + height)]
        for i in range(1, 100):
            obj3.boxes.append((obj3.boxes[-1][0]-2, obj3.boxes[-1][1], obj3.boxes[-1][2]-2, obj3.boxes[-1][3]))
        for i in range(100):
            obj3.boxes.append((obj3.boxes[-1][0]-2, obj3.boxes[-1][1]+2, obj3.boxes[-1][2]-2, obj3.boxes[-1][3]+2))
        objs_dict['obj3'] = obj3

        obj4 = ObjInVideo('obj4')
        obj4.frame_start = 0
        obj4.frame_end = 200
        obj4.types = ['pl_right'] * 200
        obj4.boxes = [(400, 300, 400 + width, 300 + height)]
        for i in range(1, 100):
            obj4.boxes.append((obj4.boxes[-1][0], obj4.boxes[-1][1]+2, obj4.boxes[-1][2], obj4.boxes[-1][3]+2))
        
        for i in range(100):
            obj4.boxes.append((obj4.boxes[-1][0]-2, obj4.boxes[-1][1]+2, obj4.boxes[-1][2]-2, obj4.boxes[-1][3]+2))
        
        objs_dict['obj4'] = obj4

    if "bdd_person_cross_street" == name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 200
        obj1.types = ['person'] * 200
        obj1.boxes = [(100, 500, 100 + width, 500 + height)]
        for i in range(1, 200):
            obj1.boxes.append((100 + i * 5, 500, 100 + width + i * 5 + width, 500 + height))
        objs_dict['obj1'] = obj1
        relation = []

    if "football_players_tackle" == name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 130
        obj1.types = ['person'] * 60
        obj1.boxes = [(100, 500, 100 + width, 500 + height)]
        for i in range(1, 60):
            obj1.boxes.append((100+i*5, 500, 100+i*5 + width, 500 + height))
        for i in range(40):
            obj1.boxes.append(obj1.boxes[-1])
        for i in range(60, 90):
            obj1.boxes.append((100+i*5, 500, 100+i*5 + width, 500 + height))
        objs_dict['obj1'] = obj1
        obj2 = ObjInVideo("obj2")
        obj2.frame_start = 0
        obj2.frame_end = 130
        obj2.types = ['person'] * 60
        obj2.boxes = [(400, 200, 400 + width, 200 + height)]
        for i in range(1, 60):
            obj2.boxes.append(
                (400 , 200 + 5*i, 400 + width, 200 + 5*i + height))
        for i in range(70):
            obj2.boxes.append(obj2.boxes[-1])
        objs_dict['obj2'] = obj2
        relation = [('obj1', 'obj2')]

    if "football_player_dashs_forward" == name:
        obj1 = ObjInVideo('obj1')
        obj1.frame_start = 0
        obj1.frame_end = 130
        obj1.types = ['person'] * 130
        obj1.boxes = [(0, 500, 0 + width, 500 + height)]
        for i in range(1, 130):
            obj1.boxes.append((50+i*5, 500, 50+i*5 + width, 500 + height))
        objs_dict['obj1'] = obj1
        obj2 = ObjInVideo("obj2")
        obj2.frame_start = 0
        obj2.frame_end = 130
        obj2.types = ['person'] * 130
        obj2.boxes = [(0, 550, 0 + width, 550 + height)]
        for i in range(1, 130):
            obj2.boxes.append(
                (0+i*5, 550, 0+i*5 + width, 550 + height))
        objs_dict['obj2'] = obj2

        obj3 = ObjInVideo("obj3")
        obj3.frame_start = 0
        obj3.frame_end = 130
        obj3.types = ['person'] * 130
        obj3.boxes = [(0, 450, 0 + width, 450 + height)]
        for i in range(1, 130):
            obj3.boxes.append(
                (0+i*5, 450, 0+i*5 + width, 450 + height))
        objs_dict['obj3'] = obj3

        relation = [('obj1', 'obj2')]
    
    if "left_turn_tldraw1" == name:
        obj_counter = 1
        obj_boxes_dict = generate_bounding_boxes(json_data, 50, 50)
        obj_types = ['car', 'person']
        index = 0
        for key, value in obj_boxes_dict.items():
            obj = ObjInVideo(f"obj{obj_counter}")
            obj.frame_start = 0
            obj.frame_end = len(value) - 1
            obj.types = [obj_types[index]] * len(value)
            obj.boxes = value
            objs_dict[f"obj{obj_counter}"] = obj
            obj_counter += 1
            index += 1
        print(objs_dict)
    
    if "left_turn_tldraw2" == name:
        obj_counter = 1
        obj_boxes_dict = generate_bounding_boxes_json_file('/nethome/dshah371/sketchql-backend/json_files/left_turn_tldraw2.json', 50, 50)
        for key, value in obj_boxes_dict.items():
            obj = ObjInVideo(f"obj{obj_counter}")
            obj.frame_start = 0
            obj.frame_end = len(value) - 1
            obj.types = ['car'] * len(value)
            obj.boxes = value
            objs_dict[f"obj{obj_counter}"] = obj
            obj_counter += 1
        print(objs_dict)
    
    if "left_turn_tldraw3" == name:
        obj_counter = 1
        obj_boxes_dict = generate_bounding_boxes_json_file('/nethome/dshah371/sketchql-backend/json_files/left_turn_tldraw3.json', 50, 50)
        for key, value in obj_boxes_dict.items():
            obj = ObjInVideo(f"obj{obj_counter}")
            obj.frame_start = 0
            obj.frame_end = len(value) - 1
            obj.types = ['car'] * len(value)
            obj.boxes = value
            objs_dict[f"obj{obj_counter}"] = obj
            obj_counter += 1
        print(objs_dict)
    
    if "kick_ball_tldraw" == name:
        obj_counter = 1
        obj_boxes_dict = generate_bounding_boxes_json_file('/nethome/dshah371/sketchql-backend/json_files/kick_ball_tldraw.json', 50, 50)
        for key, value in obj_boxes_dict.items():
            obj = ObjInVideo(f"obj{obj_counter}")
            obj.frame_start = 0
            obj.frame_end = len(value) - 1
            obj.types = ['ball'] * len(value)
            obj.boxes = value
            objs_dict[f"obj{obj_counter}"] = obj
            obj_counter += 1
        relation = [('obj1', 'obj2'), ('obj2', 'obj1')]
        
        
        
    return objs_dict, relation



class VisualQuery:
    def __init__(self, objs_dict, relation=[]):
        self.objs_dict = objs_dict
        self.relation = relation
        self.features_dict = self.compute_all_features()
        self.feature_weights_dict = self.get_default_feature_weights()
        self.bias = None # bias and feature weights make up parameters for logistic regression
        query_obj_ids = list(self.objs_dict.keys())
        self.obj_ids_time_sorted = list(sorted(query_obj_ids, key=lambda x: self.objs_dict[x].frame_start))
        self.f_mean = None
        self.f_std = None
        frame_end = max([self.objs_dict[obj].frame_end for obj in self.objs_dict])
        frame_start = min([self.objs_dict[obj].frame_start for obj in self.objs_dict])
        self.n_frame = frame_end-frame_start
        self.act_learner = None

    def get_feature_weight_vector(self, query_obj_ids):
        #query_obj_ids is used for ordering
        weights = []
        for obj in query_obj_ids:
            for f_name in self.feature_weights_dict[obj].keys():
                weights.append(self.feature_weights_dict[obj][f_name])
        for pair in self.relation:
            for f_name in self.feature_weights_dict[pair].keys():
                weights.append(self.feature_weights_dict[pair][f_name])
        weights = np.array(weights)
        return weights

    def set_feature_weight_vector(self, weights, query_obj_ids):
        i=0
        for obj in query_obj_ids:
            for f_name in self.feature_weights_dict[obj].keys():
                self.feature_weights_dict[obj][f_name] = weights[i]
                i+=1
        for pair in self.relation:
            for f_name in self.feature_weights_dict[pair].keys():
                self.feature_weights_dict[pair][f_name] = weights[i]
                i+=1

    def compute_all_features(self):
        features_dict = {}
        for obj_id in self.objs_dict:
            features_dict[obj_id] = feature_eng(self.objs_dict[obj_id].get_centroids())
        for obj_id_1, obj_id_2 in self.relation:
            obj1, obj2 = self.objs_dict[obj_id_1], self.objs_dict[obj_id_2]
            features_dict[(obj_id_1, obj_id_2)] = relation_feature_eng_video_obj(obj1, obj2)
        return features_dict

    def get_default_feature_weights(self):
        feature_weights_dict = {}
        for key in self.features_dict:
            if isinstance(key, str):#single obj
                #feature_weights_dict[key] = {f_name:0 for f_name in self.features_dict[key]}
                #patterns = self.features_dict[key]
                #if np.max(np.abs(patterns['deg_to_x0'])) > 15 / 180:  # if bigger than 15 degrees use deg pattern
                #    w_euc, w_deg = 0, 1
                #else:
                #    w_euc, w_deg = 1, 0
                #feature_weights_dict[key]['deg_to_x0'] = w_deg
                #feature_weights_dict[key]['euc_to_x0'] = w_euc
                feature_weights_dict[key] = {f_name: 0.1 for f_name in self.features_dict[key]}
            else:#obj pair
                feature_weights_dict[key] = {f_name:0.25 for f_name in self.features_dict[key]}

        return feature_weights_dict


# below are feature engineering functions for the manual feature engineering approach

def feature_eng(centroids):
    centroids = np.array(centroids)
    #||x-x0||
    euc_dist = centroids - centroids[0, :]
    euc_dist = np.linalg.norm(euc_dist, axis=1)
    #deg(x-x0)
    deg_dist = centroids - centroids[0, :]
    deg_dist = np.arctan2(deg_dist[:,1], deg_dist[:,0])*180/np.pi
    n = min(10, len(deg_dist)-1)
    for i in range(n):#the first few angles might not be accurate
        deg_dist[i] = deg_dist[n]
    deg_dist = deg_dist - deg_dist[0]
    deg_dist = deg_dist/180
    x_abs_ratio = centroids[:,0]#/canvas_max_x
    y_abs_ratio = centroids[:,1]#/canvas_max_y
    euc_dist = euc_dist/(np.max(euc_dist)+1e-4)
    #deg_dist = deg_dist/np.max(np.abs(deg_dist))
    return {"euc_to_x0":euc_dist, "deg_to_x0":deg_dist, "x_ratio":x_abs_ratio, "y_ratio":y_abs_ratio}
    #return {"euc_to_x0":euc_dist}#, "deg_to_x0":deg_dist}#, "x_ratio":x_abs_ratio, "y_ratio":y_abs_ratio}

def get_frame_intersection(x, frame_start_end_x, y, frame_start_end_y):
    max_f_s = max(frame_start_end_x[0], frame_start_end_y[0])
    min_f_e = min(frame_start_end_x[1], frame_start_end_y[1])
    x = x[max_f_s - frame_start_end_x[0]:min_f_e - frame_start_end_x[0]]
    y = y[max_f_s - frame_start_end_y[0]:min_f_e - frame_start_end_y[0]]
    return x, y

def relation_feature_eng_video_obj(video_obj1, video_obj2):
    centroids_1 = video_obj1.get_centroids()
    frame_start_1 = video_obj1.frame_start
    frame_end_1 = video_obj1.frame_end
    centroids_2 = video_obj2.get_centroids()
    frame_start_2 = video_obj2.frame_start
    frame_end_2 = video_obj2.frame_end
    centroids_1, centroids_2 = get_frame_intersection(centroids_1, (frame_start_1, frame_end_1),
                                                      centroids_2, (frame_start_2, frame_end_2))
    return relation_feature_eng(centroids_1, centroids_2)

def relation_feature_eng(centroids1, centroids2):
    centroids1 = np.array(centroids1)
    centroids2 = np.array(centroids2)
    #||x-y||
    centroid_diff =  centroids2 - centroids1
    euc_dist = np.linalg.norm(centroid_diff, axis=1)
    #deg(x-y)
    relative_deg_dist = centroids2 - centroids1[0, :]
    relative_deg_dist = np.arctan2(relative_deg_dist[:, 1], relative_deg_dist[:, 0]) * 180 / np.pi
    relative_deg_dist = relative_deg_dist - relative_deg_dist[0]
    relative_deg_dist = relative_deg_dist/180


    x_diff_ratio = centroid_diff[:,0]#/canvas_max_x
    y_diff_ratio = centroid_diff[:,1]#/canvas_max_y
    max_euc_dist = np.max(euc_dist)
    min_euc_dist = np.min(euc_dist)
    return {"euc_rel":euc_dist/max_euc_dist,
            "euc_min":min_euc_dist/max_euc_dist*np.ones_like(euc_dist),#}
            "deg_rel":relative_deg_dist,
            "x_diff_ratio":x_diff_ratio/max_euc_dist,
            "y_diff_ratio":y_diff_ratio/max_euc_dist}
