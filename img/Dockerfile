FROM node:lts-alpine

RUN apk --no-cache add curl

WORKDIR /app
RUN mkdir upload

COPY package.json package.json
RUN npm install

COPY tsconfig.json tsconfig.json

COPY src src

COPY clean.js clean.js

CMD npm start