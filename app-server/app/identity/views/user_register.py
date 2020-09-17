from sqlalchemy.exc import IntegrityError
from os import environ
from identity import identity
from identity.models.user import User
from identity.token_required import token_required
from identity.jwt_checker import check
from external.session_scope import session_scope
from flask import jsonify
from flask import request
import jwt


@identity.route('/user/register', methods=['PATCH'])
@token_required(['anonymous', 'authenticated'])
def user_register():
    header = request.headers.get('Authorization')
    token = header.split()[1]

    jwt_user = jwt.decode(token, environ.get('FLASK_SECRET_KEY'))
    with session_scope() as session:
        user = session.query(User).get(jwt_user['id'])
        if not user:
            return jsonify(error='404 Not Found: user'), 404

        try:
            user.name = request.get_json()['name']
        except KeyError:
            return jsonify(error='422 Unprocessable Entity: no name'), 422

        try:
            user.set_password(request.get_json()['password'])
        except KeyError:
            return jsonify(error='422 Unprocessable Entity: no password'), 422

        user.role = 'authenticated'

        try:
            session.commit()
        except IntegrityError:
            return jsonify(error='409 Resource already exists: name'), 409

    token = jwt.encode(user.as_dict(), environ.get('FLASK_SECRET_KEY'))

    return jsonify({'user': user.as_dict(),
                    'token': token.decode('utf-8')}), 200
