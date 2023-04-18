# Specify the base image
FROM node:latest

# Set the working directory for the server
WORKDIR /

# Copy package.json and package-lock.json to the server container
COPY package*.json ./

# Install server dependencies
RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]
