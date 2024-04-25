import requests

response = requests.post('http://127.0.0.1:5000/run-py')
print(response.status_code)
print(response.json())