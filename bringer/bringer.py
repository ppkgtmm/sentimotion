import requests
import json

fp = open('../cleaned-msg.json', 'r')
data = json.load(fp)
fp.close()

assert data['message']

batch_size = 32
predictions = []

for i in range(0,len(data['message']), batch_size):
    print(data['message'][i:i+batch_size])
    # call api

# save predictions to json