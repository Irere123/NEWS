FROM node:16

# Create app directry
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json ./
COPY yarn.lock ./

RUN yarn

# Bundle app source
COPY . .

RUN yarn build


EXPOSE 8080
CMD ["node", "dist/index.js"]
USER node