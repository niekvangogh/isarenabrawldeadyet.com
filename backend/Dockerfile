FROM node:12.16

WORKDIR /app

COPY ./package*.json ./

RUN npm install --silent -g @nestjs/cli

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:prod"]