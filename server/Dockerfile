FROM node:16-alpine AS development
RUN npm install -g nodemon
WORKDIR /usr/app
COPY ./package*.json ./
RUN npm install
COPY ./ ./
CMD [ "npm", "run", "dev" ]