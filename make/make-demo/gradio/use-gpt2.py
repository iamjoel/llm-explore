import json
import os
import requests
from dotenv import load_dotenv
load_dotenv() 

# use host inference API https://huggingface.co/docs/api-inference/quicktour
API_KEY = os.getenv('HUGGINGFACE_API_KEY')
API_URL = "https://api-inference.huggingface.co/models/gpt2"
headers = {"Authorization": f"Bearer " + API_KEY}
def query(payload):
    data = json.dumps(payload)
    response = requests.request("POST", API_URL, headers=headers, data=data)
    return json.loads(response.content.decode("utf-8"))
data = query("Can you please let us know more details about your ")

print(data)