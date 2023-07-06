import requests
try:

    response = requests.get("http://localhost:8080")
    print("Response Status Code :",response.status_code)
    print("Response Data : ",response)
    print(response.json())
except Exception as error:
    print("Error : ",error)
    