from flask import jsonify
from flask import request

from identity import identity
from identity.models.user import User
from external.session_scope import session_scope


@identity.route('/users', methods=['GET'])
def user_read_all():

    try:
        if request.args['is_admin'] == 'true':
            is_admin = True
        else:
            is_admin = False
    except KeyError:
        with session_scope() as session:
            users = session.query(User).all()
        return jsonify({"users": [user for user in users]})

    with session_scope() as session:
        users = session.query(User).filter(User.is_admin == is_admin)
    return jsonify({"users": [user for user in users]})
