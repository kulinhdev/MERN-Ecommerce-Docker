# Specify the base image
FROM node:latest

# Set the working directory for the server
WORKDIR /app

# Copy package.json and package-lock.json to the server container
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "run", "dev" ]
