FROM node:latest

WORKDIR /code
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./

RUN npm install --no-optimal && npm cache clean --force

ENV PATH /code/node_modules/.bin:$PATH

WORKDIR /code/app

COPY ./frontend .


