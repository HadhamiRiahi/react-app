FROM node:carbon

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

# Create app directory
RUN mkdir -p /usr/src/loopback-app
WORKDIR /usr/src/loopback-app



# Install app dependencies
COPY ./package.json /usr/src/loopback-app/
COPY ./package-lock.json /usr/src/loopback-app/

RUN npm install

# Bundle app source
COPY . /usr/src/loopback-app

# Port to listener
EXPOSE 5000

# Environment variables
ENV NODE_ENV production
ENV PORT 5000
ENV PUBLIC_PATH "/"




# Main command
CMD [ "node", "." ]