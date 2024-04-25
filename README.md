# sketchql-demo

## Description


## How to Run
### Terminal window 1:

1. cd sketchql-backend

2. Install requirements\
pip install -r requirements.txt

3. Download dataset\
Please download the traffic dataset from https://www.dropbox.com/scl/fi/qormqlzuijb8133um0wa7/VIRAT_S_050300_01_000148_000396.mp4?rlkey=if1vmf14md7nynjuepv9s903j&dl=0 and put it in the data/videos/ folder

4. Download model checkpoint\
Download from https://www.dropbox.com/scl/fi/5jnqj57idzhpm68sjyfb8/model_cp.pt?rlkey=sbz0ix15ofbz0x12d6714v5wu&dl=0 and put it in the data/model_checkpoint folder

5. Run server\
Run the script server.py\
python3 server.py

### Terminal window 2:

1. install yarn\
npm install -g yarn

2. Run code\
cd tldraw-v1\
yarn install\
yarn start:core\
open localhost://5422 in your browser

# Alternative to Running Code 
1. install yarn\
npm install -g yarn

2.Clone tldraw-v1
https://github.com/tldraw/tldraw-v1.git
3. Replace tldraw-1 core-example-advanced folder with the folder from this github repo
4. Run code on new tldraw-v1 foler\
cd tldraw-v1\
yarn install\
yarn start:core\
open localhost://5422 in your browser
