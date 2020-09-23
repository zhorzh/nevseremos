from identity.models.user import User


def test_user_to_json():
    user = User()
    user_json = user.to_json()
    assert user_json
    assert isinstance(user_json, str)
