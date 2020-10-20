FROM python:3

RUN mkdir /code
COPY ./backend /code
RUN mkdir /code/songs

WORKDIR /code
RUN pip install -r requirements.txt

RUN mma -G

ENV FLASK_APP=serve.py
ENV FLASK_RUN_HOST=0.0.0.0