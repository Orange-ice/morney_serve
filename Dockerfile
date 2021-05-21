FROM node:12
# Create app directory
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production --registry=https://registry.npm.taobao.org
COPY . .
EXPOSE 7001
CMD [ "npm", "run", "dev" ]
