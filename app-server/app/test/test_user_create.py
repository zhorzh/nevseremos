from identity.models.user import User


def test_user_create():
    user = User()
    print('*************************')
    assert user
    # assert user.id
    # assert user.date_created
    # assert user.email
    assert True
