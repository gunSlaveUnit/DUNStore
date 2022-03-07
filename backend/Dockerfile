FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN mkdir -p usr/src/app/backend
WORKDIR /usr/src/app/backend

COPY . /usr/src/app/backend

RUN python3 -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
