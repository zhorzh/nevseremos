from identity.models.user import User


def test_user_password():
    user = User()
    TEST_PASSWORD = 'test_password'
    user.set_password(TEST_PASSWORD)
    assert user.check_password(TEST_PASSWORD)
