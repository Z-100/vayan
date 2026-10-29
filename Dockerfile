FROM node:22-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json package-lock.json ./

RUN npm ci --silent && npm i -g serve --silent

COPY . .

RUN npm run build

CMD ["serve", "-s", "dist"]
