FROM node:17-alpine

WORKDIR /usr/src/app/frontend

ENV PATH /usr/src/app/frontend/node_modules/.bin:$PATH

COPY . /usr/src/app/frontend

RUN npm install --silent
RUN npm install react-scripts@5.0.0 -g --silent
RUN npm install react-bootstrap bootstrap@5.1.3

# start app
CMD ["npm", "start"]
