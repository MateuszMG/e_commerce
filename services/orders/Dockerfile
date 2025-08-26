FROM node:18-alpine
WORKDIR /usr/src/app
RUN npm install -g typescript
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node", "dist/main.js"]
