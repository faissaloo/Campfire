SRC_DIR := src
SRC_FILES := $(shell find src/ -type f -regex ".*\.js")

.PHONY: serve
serve: docker-up

.PHONY: docker-up
docker-up: docker-down docker-build
	docker-compose up --build

.PHONY: docker-down
docker-down:
	docker-compose down

.PHONY: docker-build
docker-build:
	docker-compose build

.PHONY: shell
shell:
	docker exec -ti campfire-app bash

.PHONY: test
test: docker-down docker-build
	docker-compose run --rm campfire-app npm test

build: $(SRC_FILES)
	npm run-script build

.PHONY: deploy
deploy: build
	scp -i ~/.ssh/ratwires -P 460 -r . root@ratwires.space:/var/www/campfire.ratwires.space/
