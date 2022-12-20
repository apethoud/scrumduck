FROM node:16-alpine AS development
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
CMD [ "npm", "start" ]