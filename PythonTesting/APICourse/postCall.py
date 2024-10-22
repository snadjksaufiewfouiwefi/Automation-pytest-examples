import requests

header = {
    'Accept': 'text/plain'
}

request_payload = {

  "id": 24,
  "title": "sanket singh thakur",
  "dueDate": "2024-09-01T12:32:23.118Z",
  "completed": True
}

response = requests.post("https://fakerestapi.azurewebsites.net/api/v1/Activities",
                         headers=header,
                         json=request_payload)
print(response.status_code)
print(response.json())

data = response.json()


assert response.status_code == 200
assert data['id']==24

