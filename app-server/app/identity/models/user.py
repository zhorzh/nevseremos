import json
from uuid import UUID
from datetime import datetime

from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Boolean
from sqlalchemy import DateTime
from werkzeug.security import generate_password_hash
from werkzeug.security import check_password_hash

Base = declarative_base()


class OutputMixin(object):
    RELATIONSHIPS_TO_DICT = False

    def __iter__(self):
        return self.to_dict().iteritems()

    def to_dict(self, rel=None, backref=None, exclude=()):
        if rel is None:
            rel = self.RELATIONSHIPS_TO_DICT
        res = {column.key: getattr(self, attr)
               for attr, column
               in self.__mapper__.c.items()
               if column.key not in exclude}
        if rel:
            for attr, relation in self.__mapper__.relationships.items():
                # Avoid recursive loop between to tables.
                if backref == relation.table:
                    continue
                value = getattr(self, attr)
                if value is None:
                    res[relation.key] = None
                elif isinstance(value.__class__, DeclarativeMeta):
                    res[relation.key] = value.to_dict(backref=self.__table__)
                else:
                    res[relation.key] = [i.to_dict(backref=self.__table__)
                                         for i in value]
        return res

    def to_json(self, rel=None, exclude=()):
        def extended_encoder(x):
            if isinstance(x, datetime):
                return x.isoformat()
            if isinstance(x, UUID):
                return str(x)
        if rel is None:
            rel = self.RELATIONSHIPS_TO_DICT
        return json.dumps(self.to_dict(rel, exclude=exclude),
                          default=extended_encoder)


class User(OutputMixin, Base):
    __tablename__ = 'user'
    id = Column(Integer, primary_key=True, autoincrement=True)
    date_created = Column(DateTime, default=datetime.utcnow)
    email = Column(String(256), default=None, unique=True)
    first_name = Column(String(256), default=None)
    last_name = Column(String(256), default=None)
    company_name = Column(String(256), default=None)
    company_size = Column(String(256), default=None)
    type_of_activity = Column(String(256), default=None)
    password = Column(String(256), default=None)
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)
