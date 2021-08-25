#!/bin/bash

APP=$1
VERSION=$2

docker images | grep $APP

docker rmi ${APP}:${VERSION}
docker rmi registrydocker.oncosmos.com:5000/${APP}:${VERSION}

