FROM node:10-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm install -g nodemon mysql2 sequelize sequelize-cli

RUN mkdir data

EXPOSE 3000

ENTRYPOINT npm install && nodemon