import requests
import json

base_url = 'https://reqres.in/api/users'

headers_test = {'content-type': 'application/json'}

# payload = {
#     "name": "prasanth",
#     "job" : "QA"
# }
json_file = open('./users.json')
json_payload= json.load(json_file)

response = requests.post(url=base_url,headers=headers_test,data= json_payload)
print(response.status_code)
print(response.text)
