from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import String

Base = declarative_base()


class Role(Base):
    __tablename__ = 'role'
    id = Column(String(256), primary_key=True)
    name = Column(String(256))

    def as_dict(self):
        return {column.name: getattr(self, column.name)
                for column
                in self.__table__.columns
                if column.name is not 'password'}
