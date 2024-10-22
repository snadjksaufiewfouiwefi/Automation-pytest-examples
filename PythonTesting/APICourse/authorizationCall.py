import requests

head = {
    'content-type':'application/json',
    'Authorization':'bearer --key--'
}

body = {
     "name": "Swarnalata Varman DDS",
     "email": "varman_dds_swarnalata@mills.test",
     "gender": "female",
     "status": "inactive"
}

url = 'https://gorest.co.in/public/v2/users'

response = requests.post(url,headers=head,json=body)
print(response.json())
assert response.status_code == 201

getResponse = requests.get(url+'/'+response.json()['id'],headers=head)

print(getResponse.json())