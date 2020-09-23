from flask import Blueprint

external = Blueprint('external', __name__)


# from external.views import api_status
from external.views import tables_list
from external.views import tables_create
from external.views import tables_drop
