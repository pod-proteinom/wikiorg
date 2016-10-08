#!/bin/bash 
if [ -z "$1" ] || [ -z "$2" ] || [ -z "$3" ]; then
	exit -1
else
	VOLUME="data"
	USER=$1
	PWD=$2
fi

if !(docker volume ls | grep $VOLUME &>/dev/null;)
then
	docker run -v $VOLUME:/data/db --name mongod -d mongo --directoryperdb	
	docker cp data/ mongod:/
	for dir in $3 ; do
		if [[ -d $dir ]]; then
			for city in $dir* ; do
				if [[ -d $city ]]; then
					for file in $city/*.json ; do
						db=${city##*/}
						echo $db
						filename=${file##*/}
						withoutExt=${filename%.*}
						docker exec mongod mongoimport -d "$db" -c "$withoutExt" /"$file"
					done
				fi
			done
		fi
	done
	docker exec mongod mongo admin --eval "db.createUser({user: '$USER', pwd: '$PWD', roles: [ 'root' ]})"
	docker stop mongod
	docker rm mongod
fi