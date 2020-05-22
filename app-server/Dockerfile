from python:3.8

# install system dependencies
run apt-get update
run apt-get install -y gcc
run apt-get install -y python3-dev
run apt-get install -y libpq-dev
run apt-get install -y build-essential

# install python dependencies
copy ./requirements.txt /srv/requirements.txt
workdir /srv
run pip3 install -r requirements.txt

run mkdir /srv/app
workdir /srv/app

expose 5000
expose 6066
