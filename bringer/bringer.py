from requests import post
from pymongo import MongoClient
from datetime import datetime
import json

fp = open('../cleaned-msg.json', 'r')
data = json.load(fp)
fp.close()

assert data['message']

batch_size = 32
predictions = []
bodies = [msg["body"] for msg in data["message"]]

for i in range(0,len(bodies), batch_size):
    result = post(
        'http://localhost:5000/predict',
        json={
            "messages": bodies[i:i+batch_size]
        }
    )
    predictions += result.json()["prediction"]

final_object = []

for (p, message) in zip(predictions, data["message"]):
    final_object.append({
        "polarity": p["polarity"],
        "emotion": p["emotion"],
        "created": datetime.strptime(message["created"], '%Y-%m-%dT%H:%M:%S.%f%z'),
        "space_id": message["space_id"],
        "message_id": message["message_id"],
    })

client = MongoClient("mongodb://localhost:27017")

db = client["project"]

_ = db["predictions"].insert_many(final_object)

print(db["predictions"].count_documents({}))
