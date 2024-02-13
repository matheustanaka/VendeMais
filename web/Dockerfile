# Use an official Node.js runtime as a parent image (Alpine version for smaller size)
FROM node:20.4.0-alpine

# Create app directory and set as WORKDIR. This ensures that all subsequent
# commands are run from this directory.
WORKDIR /home/node/code

# Node.js images define a 'node' user for running applications non-root. However,
# we need to ensure the 'node' user has the correct permissions for the WORKDIR.
# Copy package.json and package-lock.json (if available) to leverage Docker cache
COPY package*.json ./

# Change owner of the WORKDIR to 'node' user to avoid permission issues.
# This is done before running 'npm install' to ensure that 'node' user has
# the necessary write permissions.
USER root
RUN chown -R node:node /home/node/code
USER node

# Install app dependencies
RUN npm install 

# Bundle app source
COPY --chown=node:node . .

# Your app binds to port 3000 by default, make sure the port is exposed
EXPOSE 8000

# Define the command to run your app
CMD [ "npm", "run", "dev", "--host" ]


