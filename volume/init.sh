#!/bin/bash 
if [ -z "$1" ] || [ -z "$2" ]; then
	exit -1
else
	VOLUME="data"
	USER=$1
	PWD=$2
fi

if !(docker volume ls | grep $VOLUME &>/dev/null;)
then
	docker run -v $VOLUME:/data/db --name mongod -d mongo --directoryperdb
	docker exec mongod mongo admin --eval "db.createUser({user: '$USER', pwd: '$PWD', roles: [ 'root' ]})"
	docker stop mongod
	docker rm mongod
fi