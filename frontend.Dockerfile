FROM node:latest

RUN mkdir /code
COPY ./frontend /code

WORKDIR /code
RUN npm install


