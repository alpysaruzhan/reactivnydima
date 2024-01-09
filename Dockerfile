# Dockerfile
 
# Use an existing node alpine image as a base image.
FROM node:18-alpine
 
# Set the working directory.
WORKDIR /src
 
# Copy the package.json file.
COPY package*.json ./
COPY FrontEndApiGateway ./
 
# Install application dependencies.
RUN npm install
 
# Copy the rest of the application files.
COPY . .

RUN npm install ./FrontEndApiGateway

# Expose the port.
EXPOSE 3000
 
# Run the application.
CMD ["npm", "start"]
