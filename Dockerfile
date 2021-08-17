FROM node:12.18-alpine

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

RUN npm build

CMD npm start

EXPOSE 5050