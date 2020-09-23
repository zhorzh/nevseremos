from os import environ
from datetime import datetime

from flask import Flask
from flask import jsonify
from flask import render_template
from flask_cors import CORS
from flask.json import JSONEncoder
from sqlalchemy.ext.declarative import DeclarativeMeta

from identity import identity
from external import external


class CustomJSONEncoder(JSONEncoder):
    def default(self, obj):
        if isinstance(obj.__class__, DeclarativeMeta):
            return obj.to_dict(exclude=('password', ))
        return super(CustomJSONEncoder, self).default(obj)


# class CustomJSONEncoder(JSONEncoder):
#     def default(self, obj):
#         if isinstance(obj.__class__, DeclarativeMeta):
#             # don't re-visit self
#             if obj in _visited_objs:
#                 return None
#             _visited_objs.append(obj)
#
#             # an SQLAlchemy class
#             fields = {}
#             for field in [x for x in dir(obj) if not x.startswith('_') and x != 'metadata']:
#                 fields[field] = obj.__getattribute__(field)
#             # a json-encodable dict
#             return fields
#
#             return JSONEncoder.default(self, obj)


# class CustomJSONEncoder(JSONEncoder):
#     def default(self, obj):
#         try:
#             if isinstance(obj, datetime):
#                 return obj.isoformat()
#             iterable = iter(obj)
#         except TypeError:
#             pass
#         else:
#             return list(iterable)
#         return JSONEncoder.default(self, obj)

app = Flask(__name__)
app.json_encoder = CustomJSONEncoder
CORS(app)
app.config['SECRET_KEY'] = environ.get('SECRET_KEY')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.register_blueprint(external, url_prefix='/api/db')
app.register_blueprint(identity, url_prefix='/api')


@app.route('/api/ping', methods=['GET'])
def ping():
    return jsonify({'status': 'ok2'})


# @app.route('/signup_client', methods=['GET'])
# def signup():
#     return render_template('signup.html')
#
#
# @app.route('/questions', methods=['GET'])
# def questions():
#     return render_template('questions.html')
#
#
# @app.route('/about', methods=['GET'])
# def about():
#     return render_template('about-company.html')
