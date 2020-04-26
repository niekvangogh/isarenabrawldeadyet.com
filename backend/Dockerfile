FROM node:8

EXPOSE 8080

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./dist ./dist

CMD node dist/main
