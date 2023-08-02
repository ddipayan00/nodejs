# Fetching the minified node image on apline linux
FROM node:slim

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /express_server

# Copying all the files in our project
COPY ./ /express_server
# Installing dependencies
RUN npm install

# Starting our application
CMD [ "node", "server.js" ]

# Exposing server port
# EXPOSE 5000
EXPOSE 8080