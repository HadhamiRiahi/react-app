FROM node:carbon

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get -y install autoconf automake libtool nasm make pkg-config git apt-utils

# Create app directory
RUN mkdir -p /usr/src/react-app
WORKDIR /usr/src/react-app



# Install app dependencies
COPY ./package.json /usr/src/react-app/
COPY ./package-lock.json /usr/src/react-app/

RUN npm install

# Bundle app source
COPY . /usr/src/react-app

# Port to listener
EXPOSE 3000

# Environment variables
ENV NODE_ENV production
ENV PORT 3000
ENV PUBLIC_PATH "/"


# Main command
CMD [ "npm", "run" ]