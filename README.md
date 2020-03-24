# How to install this project:

### 1. Install Docker
[Docker docs](https://docs.docker.com/v17.09/engine/installation/linux/docker-ce/ubuntu)

`sudo apt-get update`

`sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common`

`curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -`

`sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"`

`sudo apt-get update`

`sudo apt-get install -y docker-ce`


### 2. Install Docker Compose
[Docker Compose docs](https://docs.docker.com/compose/install)

`sudo curl -L "https://github.com/docker/compose/releases/download/1.24.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`

`sudo chmod +x /usr/local/bin/docker-compose`



### 3. Check versions

`docker -v`

`docker-compose -v`


### 4. Clone repo
[Github docs](https://guides.github.com)

`git clone https://github.com/zhorzh/nevseremos.git`


### 5. Build and run docker container

`sudo docker-compose up`


# How to stop this project:

### 1. Stop all docker containers

`sudo docker-compose down`
