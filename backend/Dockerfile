FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

RUN mkdir -p usr/src/app
WORKDIR /usr/src/app

COPY .. /usr/src/app

RUN python3 -m pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt
