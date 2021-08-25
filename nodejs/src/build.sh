#!/bin/bash

NAME=$1

VERSION=$2

docker build -t ${NAME}:${VERSION} .
docker tag ${NAME}:${VERSION} registrydocker.oncosmos.com:5000/${NAME}:${VERSION}
docker push registrydocker.oncosmos.com:5000/${NAME}:${VERSION}
