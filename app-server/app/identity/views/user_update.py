from os import environ

import datetime
import jwt
from external.session_scope import session_scope
from flask import jsonify
from flask import request

from identity import identity
from identity.models.user import User


@identity.route('/user/<int:user_id>', methods=['PATCH'])
def user_update(user_id):
    with session_scope() as session:
        user = session.query(User).get(user_id)

        if not user:
            return jsonify(error='404 Not Found: user not found'), 404

        try:
            email = request.get_json()['email']
            user.email = email
        except KeyError:
            pass

        try:
            user.set_password(request.get_json()['password'])
        except KeyError:
            pass

    token = jwt.encode({'id': user.id},
                       environ.get('FLASK_SECRET_KEY')).decode('utf-8')

    return jsonify({'user': user,
                    'token': token}), 200
