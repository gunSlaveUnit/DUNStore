FROM node:17-alpine

WORKDIR /usr/src/app/frontend

ENV PATH /usr/src/app/frontend/node_modules/.bin:$PATH

COPY . /usr/src/app/frontend

RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent

# start app
CMD ["npm", "start"]
