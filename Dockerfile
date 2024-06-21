FROM node:20-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm i --silent
RUN npm i -g server --silent

COPY .. ./

CMD ["serve", "-s", "build"]
