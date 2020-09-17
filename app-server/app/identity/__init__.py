from flask import Blueprint

identity = Blueprint('dentity', __name__)


from identity.views import user_create
from identity.views import user_read_all
from identity.views import user_read
from identity.views import user_register
from identity.views import user_delete
from identity.views import user_update
