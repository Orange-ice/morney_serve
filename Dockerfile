FROM node:12
# Create app directory
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production --registry=https://registry.npm.taobao.org
COPY . .
EXPOSE 7002
CMD [ "npm", "start" ]
