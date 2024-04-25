import os
import subprocess
import shutil

def convert_mp4_to_h264(input_dir, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    input_files = [f for f in os.listdir(input_dir) if f.endswith('.mp4')]
    for input_file in input_files:
        input_path = os.path.join(input_dir, input_file)
        output_path = os.path.join(output_dir, input_file.replace('.mp4', '_h264.mp4'))
        command = f'ffmpeg -i {input_path} -c:v libx264 -preset medium -crf 23 -c:a copy {output_path}'
        
        subprocess.run(command, shell=True)

        print(f"converted {input_file} to H.264 format and saved as {output_path}")

