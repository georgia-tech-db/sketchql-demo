# sketchql-demo

Terminal window 1:

cd sketchql-backend

### Install requirements
pip install -r requirements.txt

### Download dataset
Please download the traffic dataset from https://www.dropbox.com/scl/fi/qormqlzuijb8133um0wa7/VIRAT_S_050300_01_000148_000396.mp4?rlkey=if1vmf14md7nynjuepv9s903j&dl=0 and put it in the data/videos/ folder

### Download model checkpoint
Download from https://www.dropbox.com/scl/fi/5jnqj57idzhpm68sjyfb8/model_cp.pt?rlkey=sbz0ix15ofbz0x12d6714v5wu&dl=0 and put it in the data/model_checkpoint folder

### Run server
Run the script server.py
python3 server.py

Terminal window 2:

cd tldraw-v1
yarn install
yarn start:core
open localhost://5422 in your browser



