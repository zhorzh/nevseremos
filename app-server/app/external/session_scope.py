from os import environ
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from contextlib import contextmanager


engine = create_engine('postgresql://{}:{}@{}/{}'
                       .format(environ.get('DB_USER'),
                               environ.get('DB_PASSWORD'),
                               environ.get('DB_HOST'),
                               environ.get('DB_NAME')),
                       echo=True)
Session = sessionmaker(bind=engine, expire_on_commit=False)


@contextmanager
def session_scope():
    """Provide a transactional scope around a series of operations."""
    session = Session()
    try:
        yield session
        session.commit()
    except:
        session.rollback()
        raise
    finally:
        session.close()
