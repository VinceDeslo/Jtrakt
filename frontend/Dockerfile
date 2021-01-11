FROM node:alpine

# Set the working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Add the application
COPY . ./

# Start the app
CMD ["npm", "start"]
