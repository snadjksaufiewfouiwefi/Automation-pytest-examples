import requests

head = {
    'Accept': 'text/plain'
}

response = requests.get("https://fakerestapi.azurewebsites.net/api/v1/Activities/12", headers=head)

print('before update')
print(response.json())
headerPut = {
    'Accept': 'text/plain',
    'content-type':'application/json'
}

putPayload = {
  "id": 15,
  "title": "title test 15",
  "dueDate": "2024-09-01T12:57:49.904Z",
  "completed": True
}

print('after update')
responsePut = requests.put("https://fakerestapi.azurewebsites.net/api/v1/Activities/12",
                           headers=headerPut,
                           json=putPayload)

print(responsePut.json())