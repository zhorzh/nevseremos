import jwt
from identity import identity
from identity.models.user import User
from external.session_scope import session_scope
from flask import jsonify
from flask import request


@identity.route('/user/<int:user_id>', methods=['DELETE'])
def user_delete(user_id):
    with session_scope() as session:
        user = session.query(User).get(user_id)

        if not user:
            return jsonify(error='404 Not Found: user not found'), 404

        session.delete(user)

    return jsonify({'user': user}), 200
