# Simple Dockerfile for the TaxDeedFinder MVP
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy source
COPY . .

EXPOSE 3000

# Use PORT env var at runtime
CMD ["node", "server.js"]
