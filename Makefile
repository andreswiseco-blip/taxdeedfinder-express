SHELL := /bin/bash

.PHONY: help install dev start test docker-build docker-run

help:
	@echo "Makefile commands:"
	@echo "  make install       - install dependencies"
	@echo "  make dev           - run dev server (nodemon)"
	@echo "  make start         - start server (node server.js)"
	@echo "  make test          - run test suite"
	@echo "  make docker-build  - build docker image"
	@echo "  make docker-run    - run docker image locally"

install:
	npm install

dev:
	npm run dev

start:
	npm start

test:
	npm test

docker-build:
	docker build -t taxdeedfinder-express:latest .

docker-run:
	docker run --rm -p 3000:3000 -e PORT=3000 taxdeedfinder-express:latest
