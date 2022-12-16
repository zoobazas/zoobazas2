#! /usr/bin/python
# ------------------------------------------------------------------
# get_token.py
# 2022 11 17
# ------------------------------------------------------------------
import sys
import boto3


def cognito_auth(cognito):
    try:
        aws_client = boto3.client('cognito-idp',
                                  region_name="ap-northeast-1",
                                  aws_access_key_id="AWS_ACCESS_KEY_ID needed",
                                  aws_secret_access_key="AWS_SECRET_ACCESS_KEY needed", )

        aws_result = aws_client.admin_initiate_auth(
            UserPoolId=cognito["user_pool_id"],
            ClientId=cognito["user_pool_client_id"],
            AuthFlow="ADMIN_USER_PASSWORD_AUTH",
            #			AuthFlow = "USER_SRP_AUTH",
            AuthParameters={
                "USERNAME": cognito["usr"],
                "PASSWORD": cognito["password"],
            }
        )

        # ok
        sys.stderr.write("*** success ***\n")
        return aws_result

    except Exception as ee:
        # if failed
        sys.stderr.write("*** error ***\n")
        sys.stderr.write(str(ee) + "\n")
        #
        return None


parameter = {
    "user_pool_id": "ap-northeast-1_2lvOEvPx7",
    "user_pool_client_id": "46il5tmmic9msluo5fj358do62",
    "usr": "dev",
    "password": "test9999"}
result = cognito_auth(parameter)
print(result)
token = result["AuthenticationResult"]["IdToken"]
print(token)
sys.stderr.write("*** END ***\n")
