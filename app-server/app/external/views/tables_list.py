from os import environ
from flask import jsonify
from sqlalchemy import create_engine
from external import external


@external.route('/tables_list')
def tables_list():
    engine = create_engine('postgres://{}:{}@{}/{}'
                           .format(environ.get('DB_USER'),
                                   environ.get('DB_PASSWORD'),
                                   environ.get('DB_HOST'),
                                   environ.get('DB_NAME')),
                           echo=True)
    return jsonify(engine.table_names())
