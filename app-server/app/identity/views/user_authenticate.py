from core.config import SECRET_KEY
from identity import identity
from identity.models.user import User
from flask import jsonify
from flask import request
import jwt


@identity.route('/user/authenticate', methods=['POST'])
def user_authenticate():
    try:
        name = request.get_json()['data']['name']
    except KeyError:
        return jsonify(error='422 Unprocessable Entity: no name'), 422

    try:
        password = request.get_json()['data']['password']
    except KeyError:
        return jsonify(error='422 Unprocessable Entity: no password'), 422

    user = User.query.filter_by(name=name).first()
    if not user or not user.check_password(password):
        return jsonify(error='404 Not Found: user not found'), 404

    token = jwt.encode(user.serialize(), SECRET_KEY)

    results = {
        "user": user.as_dict(),
        "token": token
    }

    return jsonify(results), 200
