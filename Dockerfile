FROM node:17.9.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY src src

WORKDIR /app

CMD npm run start