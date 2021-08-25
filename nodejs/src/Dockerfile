FROM node:12.13-alpine As build

LABEL MAINTAINER="SfJwmy4A_test@oncosmos.com" TYPE=webapp

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

FROM node:12.13-alpine as production

WORKDIR /usr/src/app

COPY . .

RUN ls

COPY --from=build /usr/src/app/ ./.

RUN ls
#RUN apk add consul

ENV PORT=""
ENV ID_SRV=""
ENV HOSTNAME_REAL=""
ENV HOSTNAME_CONTAINER=""
ENV SERVICE_CONTAINER_IP=""

EXPOSE 8080

CMD [ "npm", "start"]
