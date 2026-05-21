FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev && npm install -g nodemon

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
