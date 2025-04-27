FROM node:18.16.0-alpine3.17

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run" ,"dev"]