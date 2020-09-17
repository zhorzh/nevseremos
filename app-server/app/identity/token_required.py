from os import environ
from functools import wraps
import jwt
from flask import request
from flask import jsonify


def token_required(roles):
    def decorator(function):
        @wraps(function)
        def wrapper(*args, **kwargs):
            # check authentication header
            if not request.headers.get('Authorization'):
                return jsonify(error='No authorization header'), 403

            header = request.headers.get('Authorization')

            if header.split()[0] != 'Bearer':
                return jsonify(error='No Bearer token')
            if len(header.split()) != 2:
                return jsonify(error='Invalid token')

            # verify access token
            token = header.split()[1]
            try:
                payload = jwt.decode(token, environ.get('FLASK_SECRET_KEY'))
            except jwt.DecodeError:
                return jsonify(error='JWT is not valid')

            # verify authorization scope
            if not payload['role'] in roles:
                return jsonify(error=payload['role']), 403

            # return initial function
            return function(*args, **kwargs)
        return wrapper
    return decorator
