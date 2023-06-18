# Create image based on the official Node image from dockerhub
FROM node:alpine
#Argument that is passed from docer-compose.yaml file
# ARG FRONT_END_PORT
# Create app directory
WORKDIR /usr/src/app
#Echo the argument to check passed argument loaded here correctly
# RUN echo "Argument port is : $FRONT_END_PORT"
# Copy dependency definitions
COPY package*.json ./
RUN npm install
# Get all the code needed to run the app
COPY . .
# Expose the port the app runs in
EXPOSE 3000
# Serve the app
CMD ["npm", "start"]