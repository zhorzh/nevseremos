from identity.models.user import User


def test_user_create():
    user = User()
    assert user
