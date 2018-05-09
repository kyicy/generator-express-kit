FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Building your code for production
RUN npm install -S

# Bundle app source
COPY ./dist ./dist

EXPOSE 3000
CMD [ "npm", "start" ]
