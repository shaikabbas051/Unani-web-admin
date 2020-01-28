FROM node:12

RUN mkdir -p /usr/src/solarapp
WORKDIR /usr/src/solarapp

COPY package.json /usr/src/solarapp

RUN npm config set strict-ssl false

RUN npm install
# Bundle app source
COPY . /usr/src/solarapp

EXPOSE 8080

RUN npm run build
CMD ["npm", "start"]
