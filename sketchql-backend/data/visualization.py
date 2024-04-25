import cv2
import os
from time import sleep
from matplotlib import pyplot as plt
from matplotlib.animation import FuncAnimation
import matplotlib.patches as patches
import numpy as np
import pickle

canvas_max_x = 800
canvas_max_y = 800


def write_clips(exe_results, video_file, use_out_file = None, n=10, folder=""):
    cap = cv2.VideoCapture(video_file)
    size = (360*2, 240*2)
    for i_clip in range(min(n, len(exe_results))):
        it = exe_results[i_clip]
        if use_out_file is not None:
            out_file = "./"+use_out_file
        else:
            out_file = os.path.join('output', 'query_results', folder, str(i_clip).zfill(3) + '_')
            for i in range(len(it)):
                out_file += str(it[i]['video_obj_id']) + '_'
            out_file += str(it[0]['frame_start_end'][0]) + '_' + str(it[0]['frame_start_end'][1]) + '.mp4'
        os.makedirs(os.path.dirname(out_file), exist_ok=True)
        frame_start_comb = it[0]['frame_start_end'][0]
        frame_end_comb = it[-1]['frame_start_end'][1]
        boxes_list = []
        for i in range(len(it)):
            frame_start = it[i]['frame_start_end'][0]
            frame_end = it[i]['frame_start_end'][1]
            boxes = [(0,0,0,0)]*(frame_start-frame_start_comb)
            boxes.extend(it[i]['bboxes'])
            boxes.extend([(0,0,0,0)]*(frame_end_comb-frame_end))
            boxes_list.append(boxes)
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_start_comb - 1)
        i_frame = frame_start_comb - 1
        out = cv2.VideoWriter(out_file,cv2.VideoWriter_fourcc(*'mp4v'),
                         20, size)
        while True:
            # Read a new frame
            ok, frame = cap.read()
            i_frame += 1
            if not ok or i_frame > frame_end_comb:
                break
            if i_frame < frame_start_comb:
                continue
            for boxes in boxes_list:
                i_box = int(i_frame - frame_start_comb)
                if i_box > len(boxes)-1:
                    continue
                bbox = boxes[i_box]
                p1 = (int(bbox[0]), int(bbox[1]))
                p2 = (int(bbox[2]), int(bbox[3]))
                cv2.rectangle(frame, p1, p2, (255, 0, 0), 2, 1)
            imS = cv2.resize(frame, size)
                #cv2.imshow("found clips", imS)
            out.write(imS)
        out.release()
    cap.release()
    cv2.destroyAllWindows()

def visualize(obj_list, video_file):
    frame_start_comb = obj_list[0]['frame_start_end'][0]
    frame_end_comb = obj_list[-1]['frame_start_end'][1]
    boxes_list = []
    for i in range(len(obj_list)):
        frame_start = obj_list[i]['frame_start_end'][0]
        frame_end = obj_list[i]['frame_start_end'][1]
        boxes = [(0,0,0,0)]*(frame_start-frame_start_comb)
        boxes.extend(obj_list[i]['bboxes'])
        boxes.extend([(0,0,0,0)]*(frame_end_comb-frame_end))
        boxes_list.append(boxes)
    vis_(video_file, frame_start_comb, frame_end_comb, boxes_list)


def vis_(video_file, frame_start,frame_end,boxes_list, text=None):
    video = cv2.VideoCapture(video_file)
    i_frame = 0
    while True:
        # Read a new frame
        ok, frame = video.read()
        i_frame+=1
        if not ok or i_frame>frame_end:
            break
        if i_frame < frame_start:
            continue
        #if i_frame % 5 != 0:
        #    continue
        sleep(0.02)
        try:
            for boxes in boxes_list:
                bbox = boxes[int(i_frame-frame_start)]
                p1 = (int(bbox[0]), int(bbox[1]))
                p2 = (int(bbox[2]), int(bbox[3]))
                cv2.rectangle(frame, p1, p2, (255, 0, 0), 2, 1)
            if text:
                cv2.putText(frame, text, (100, 80), cv2.FONT_HERSHEY_SIMPLEX, 4, (0, 0, 255), 4)

            imS = cv2.resize(frame, (960, 540))
            cv2.imshow("found clips", imS)
        except:
            continue
        k = cv2.waitKey(1) & 0xff
        if k == 27: break



def visualize_query(query_objs_dict, query_name):
    figure, ax = plt.subplots()

    # Setting limits for x and y axis
    min_x, min_y, max_x, max_y =0,0, 0, 0
    for obj_id in query_objs_dict:
        for box in query_objs_dict[obj_id].boxes:
            min_x = min(min_x, box[0])
            min_y = min(min_y, box[1])
            max_x = max(max_x, box[2])
            max_y = max(max_y, box[3])
    ax.set_xlim(min_x, max(canvas_max_x, max_x))
    ax.set_ylim(min_y, max(canvas_max_y, max_y))
    ax.axis('off')

    pathes = {}
    time_text = []
    colors = ["black","purple","red","blue"]
    frame_end_comb = 0
    for obj in query_objs_dict:
        c = colors.pop()
        pathes[obj] = patches.Rectangle((0, 0), 0, 0,color=c)
        ax.add_patch(pathes[obj])
        time_text.append(ax.text(0, 0, '', color='w', weight='bold',
                            fontsize=6, ha='center', va='center'))
        frame_end_comb = max(frame_end_comb, query_objs_dict[obj].frame_end)

    def animation_function(i):
        rst = []
        for idx, obj_name in enumerate(query_objs_dict):
            obj = query_objs_dict[obj_name]
            if i<obj.frame_start or i>obj.frame_end-5:#-5 to be safe
                pathes[obj_name].set_width(0)
                pathes[obj_name].set_height(0)
                continue
            xy = obj.boxes[int(i-obj.frame_start)][:2]
            xy2 = obj.boxes[int(i-obj.frame_start)][2:]
            pathes[obj_name].set_width(xy2[0] - xy[0])
            pathes[obj_name].set_height(xy2[1] - xy[1])
            xy = (xy[0], canvas_max_y - xy[1]) ##follow the video convention that y increases from top to down
            pathes[obj_name].set_xy(xy)
            cx = xy[0] + pathes[obj_name].get_width()/2.0
            cy = xy[1] + pathes[obj_name].get_height()/2.0
            time_text[idx].set_text(obj.types[0])
            time_text[idx].set_x(cx)
            time_text[idx].set_y(cy)
            rst.append(pathes[obj_name])
        return rst

    animation = FuncAnimation(figure,
                              func=animation_function,
                              frames=np.arange(0, frame_end_comb, 1),
                              interval=100)
    animation.save("output/queries/{}.mp4".format(query_name))


def overlay_bboxes_on_video(primitives_file, video_file, use_out_file=None):
    cap = cv2.VideoCapture(video_file)

    # size = (360*2, 240*2)
    size = (1920, 1080)
    if use_out_file is not None:
        out_file = "./"+use_out_file
    else:
        out_file = 'videos/{}-bbox-overlay.mp4'.format(os.path.basename(video_file[:-4]))
    os.makedirs(os.path.dirname(out_file), exist_ok=True)
    out = cv2.VideoWriter(out_file,cv2.VideoWriter_fourcc(*'mp4v'),
                        25, size)
    with open(primitives_file,'rb') as f:
        data = pickle.load(f)
    for i in range(len(data)):
        i_data = data[i]
        ok, frame = cap.read()
        if not ok:
            break
        for j, bbox in enumerate(data[i]['bboxes']):
            p1 = (int(bbox[0]), int(bbox[1]))
            p2 = (int(bbox[2]), int(bbox[3]))
            cv2.rectangle(frame, p1, p2, (36,255,12), 2, 1)
            cv2.putText(frame, data[i]['game_labels'][j], (p1[0], p1[1]-10), cv2.FONT_HERSHEY_SIMPLEX, 0.9, (36,255,12), 2)
            cv2.putText(frame, str(data[i]['ids'][j]), (p1[0], p1[1]-35), cv2.FONT_HERSHEY_SIMPLEX, 1.1, (36,255,12), 2)
        cv2.putText(frame, 'Frame: '+ str(i), (int(size[0]/2)-30, 50), cv2.FONT_HERSHEY_SIMPLEX, 1.1, (36,255,12), 2)
        imS = cv2.resize(frame, size)

        out.write(imS)
    out.release()
    cap.release()
    cv2.destroyAllWindows()


def visualize_trajectory(x, y, file_name='debug'):
    plt.figure()
    x = np.array(x) - np.mean(x)
    y = np.array(y) - np.mean(y)
    plt.plot(x[0], y[0],'ro') 
    plt.plot(x[-1], y[-1],'bo')
    plt.plot(x, y)
    plt.savefig("figs/"+file_name+".png")
    plt.close()
