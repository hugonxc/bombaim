FROM node:latest

WORKDIR /code
COPY ./frontend/package.json ./
COPY ./frontend/package-lock.json ./

RUN npm install --no-optimal && npm cache clean --force

RUN npx browserslist@latest --update-db

ENV PATH /code/node_modules/.bin:$PATH

WORKDIR /code/app

COPY ./frontend .


