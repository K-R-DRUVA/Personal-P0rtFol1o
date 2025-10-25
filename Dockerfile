# Use Node.js as the base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Clone your GitHub repo
RUN apk add --no-cache git && \
    git clone https://github.com/K-R-DRUVA/Personal-P0rtFol1o.git .

# Install dependencies
RUN npm install

# Expose Next.js default port
EXPOSE 3000

# Run the Next.js dev server
CMD ["npm", "run", "dev"]
