import http.client

conn = http.client.HTTPSConnection('wqxboppwxc.execute-api.ap-northeast-1.amazonaws.com')

headers = {'Content-type': 'text/plain',
           'Authorization': 'id token......'}

req_data = '{"STORE_CODE":{"STORE1":"888","STORE2":"849"},' \
           '"JAN_CODE":{"JAN1":"9100000003701"},"MEMBER_RANK":"1","MEMBER_CODE":"","POINT_ALL":""}'

conn.request('POST', '/dev/item-point-ref', req_data, headers)

response = conn.getresponse()
print(response.read().decode())
