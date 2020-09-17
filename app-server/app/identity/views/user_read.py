import jwt
# from core.config import SECRET_KEY
from identity import identity
from identity.models.user import User
from identity import jwt_checker
from identity.token_required import token_required
from flask import jsonify, request


@identity.route('/user/<int:user_id>', methods=['GET'])
@token_required(['anonymous', 'authenticated'])
def user_read(user_id):
    user = User.query.get(user_id)
    if not user:
        return jsonify(error='404 Not Found: user not found'), 404

    if not jwt_checker.check(user.id, request.headers):
        return jsonify(error='403 Forbidden: invalid user'), 403

    token = jwt.encode(user.serialize(), environ.get('FLASK_SECRET_KEY'))

    return jsonify({'user': user,
                    'token': token}), 200
    # results = {
    #     "user": user.serialize(),
    #     "token": token
    # }
    #
    # return jsonify(results), 200
