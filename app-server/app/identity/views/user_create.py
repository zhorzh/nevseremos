from os import environ
import logging

import jwt
from flask import jsonify
from flask import current_app
from flask import request
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash
from sqlalchemy.exc import IntegrityError

from identity import identity
from identity.models.user import User
from external.session_scope import session_scope


@identity.route('/user', methods=['POST'])
def user_create():
    # TODO: check if request data has json ---> if(request.data):
    if not request.is_json:
        return jsonify(error='*** 422 Unprocessable Entity: is not JSON'), 422

    try:
        email = request.get_json()['email']
    except KeyError:
        return jsonify(error='422 Unprocessable Entity: no email'), 422

    try:
        password = request.get_json()['password']
    except KeyError:
        return jsonify(error='422 Unprocessable Entity: no password'), 422

    try:
        is_admin = request.get_json()['is_admin']
    except KeyError:
        return jsonify(error='422 Unprocessable Entity: no is_admin'), 422

    try:
        with session_scope() as session:
            user = User()
            user.email = email
            user.set_password(password)
            user.is_admin = is_admin
            session.add(user)
    except IntegrityError:
        return jsonify({'message': 'User already exists.',
                        'info': 'User already exists.'}), 409

    token = jwt.encode({'id': user.id},
                       environ.get('FLASK_SECRET_KEY')).decode('utf-8')

    return jsonify({'user': user,
                    'token': token}), 200
