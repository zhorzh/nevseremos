from identity.models.user import User


def test_user_to_dict():
    user = User()
    user_dict = user.to_dict()
    assert user_dict
    assert isinstance(user_dict, dict)
