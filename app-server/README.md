docker build -t app-server .

docker run -v $PWD/app:/srv/app -it app-server bash

docker run -v $PWD/app:/srv/app -it app-server bash -c "pytest --ipdb"
docker run -v $PWD/app:/srv/app -it app-server bash -c "behave --no-capture"

docker exec -it app-server bash
docker exec -it postgres psql -U sandbox

alembic revision -m 'init'
alembic upgrade head
alembic current
alembic history --verbose

# new revision
alembic revision --autogenerate -m 'create user table'
docker exec app-server bash -c "python3 -m tables_create.py"
docker exec app-server bash -c "alembic revision --autogenerate -m 'create user table'"
docker exec app-server bash -c "alembic upgrade head"
docker exec app-server bash -c "alembic revision -m 'init'"

sudo pip3 install virtualenv

virtualenv venv

source venv/bin/activate or deactivate

# add this 3 lines to env.py to be able to migrate model
import sys
import os
sys.path.insert(0, os.getcwd())

from user import Base

# add database URL to alembic.ini
sqlalchemy.url = postgres://sandbox:sandbox@database/sandbox
