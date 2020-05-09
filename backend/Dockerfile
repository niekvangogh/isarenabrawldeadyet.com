FROM node:12

WORKDIR /backend

COPY . .

RUN npm i --production
RUN npm install -g @nestjs/cli

RUN npm run build

CMD node dist/main.js
EXPOSE 3000/tcp