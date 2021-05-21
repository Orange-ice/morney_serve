FROM node:12
# Create app directory
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production --registry=https://registry.npm.taobao.org
RUN npm install sequelize-cli --save
RUN npx sequelize db:migrate
COPY . .
EXPOSE 7001
CMD [ "npm", "start" ]
