from flask import Flask, request, jsonify, send_file
from flask_cors import CORS, cross_origin
import subprocess
import os
import base64
import io

app = Flask(__name__)
CORS(app, origins='*') 

@app.route('/run-py', methods=['POST'])
def run_python_script():
    print("python script called")
    data = request.get_json()
    print("data: ", data)
    arg1 = data.get('dataset')
    arg2 = data.get('query_name')
    arg3 = data.get('model_checkpoint')
    arg4 = data.get('json_data')
    print(arg1, arg2, arg3, arg4)

    script_path = 'pipeline.py'
    
    try:
        result = subprocess.check_output(['python3', script_path, arg1, arg2, arg3, arg4], universal_newlines=True)
        response = jsonify({'result': result.strip()})
        return response
    except subprocess.CalledProcessError as e:
        return jsonify({'error': str(e)})

@app.route('/run-python', methods=['POST'])
def runPythonFunction():
    print("python script called")

    script_path = 'pipeline.py'
    
    try:
        result = subprocess.check_output(['python3', script_path, "traffic", "left_turn_tldraw1", "data/model_checkpoint/model_cp.pt", "{}"], universal_newlines=True)
        response = jsonify({'result': result.strip()})
        return response
    except subprocess.CalledProcessError as e:
        return jsonify({'error': str(e)})



videos_folder_path = 'output/query_results/traffic/left_turn_tldraw1/changed_files'
@app.route('/videos', methods=['GET'])
def list_videos():
    try:
        video_data_list = []
        for filename in os.listdir(videos_folder_path):
            filepath = os.path.join(videos_folder_path, filename)
            if os.path.isfile(filepath) and filename.lower().endswith(('.mp4', '.avi', '.mkv')):
                video_data_list.append({'filename': filename, 'path': filepath})
        print(video_data_list)
        return jsonify(video_data_list)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/videos/<filename>',  methods=['GET'])
def get_video(filename):
    print("getting video")
    try:
        filepath = os.path.join(videos_folder_path, filename)
        return send_file(filepath)
    except Exception as e:
        return jsonify({'error': str(e)}), 500



vid_path = 'output/queries/left_turn_tldraw1.mp4'
@app.route('/video_file', methods=['GET'])
def get_video_file():
    # Path to your video file
    print(vid_path)
    # Send the video file to the client
    return send_file(vid_path)


if __name__ == '__main__':
    app.run(debug=True)



