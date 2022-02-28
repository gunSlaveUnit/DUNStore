FROM node:17.6.0

RUN mkdir -p usr/src/app/frontend
WORKDIR /usr/src/app/frontend

COPY . /usr/src/app/frontend

RUN npm install
RUN npm install react-scripts@3.4.1 -g
