import pytest
import requests

def test_getrequest_validation():
    header = {
        'content-type': 'application/json'
    }

    base_url = 'https://reqres.in'

    response = requests.get(url=str(base_url+'/api/users/2'),headers=header)
    assert 200 == response.status_code
    print(response.text)