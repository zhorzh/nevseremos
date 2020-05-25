import jwt
from os import environ


def check(arg_user_id, headers):
    auth = headers.get('Authorization')
    if not auth:
        return False

    token = auth.split()[1]
    jwt_user = jwt.decode(token, environ.get('FLASK_SECRET_KEY'))

    if arg_user_id != jwt_user["user_id"]:
        return False

    return True
