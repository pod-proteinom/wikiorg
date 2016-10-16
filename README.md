# wikiorg
[![Build Status](https://travis-ci.org/pod-proteinom/wikiorg.svg?branch=master)](https://travis-ci.org/pod-proteinom/wikiorg)


### Run in the dev mode
	./volume/init.sh dev dev data/
	docker-compose -f docker-compose.yml -f docker-compose.dev.yml up --build -d
### Run in the production mode
	docker-compose -f docker-compose.prod.yml up -d
#### Deploying changes
	docker login -u alta0815 -p password
	docker pull alta0815/nginx (any of images which need to update)
	docker pull alta0815/mongo
	docker pull alta0815/wikiorg
	docker-compose -f docker-compose.prod.yml up --no-deps -d nginx
