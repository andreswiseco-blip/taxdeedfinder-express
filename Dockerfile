# Simple Dockerfile for the TaxDeedFinder MVP
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies (use npm install if package-lock.json may be absent in build context)
COPY package*.json ./
# `npm ci` requires a package-lock.json; use `npm install --omit=dev` to install only production deps
RUN npm install --omit=dev

# Copy source
COPY . .

EXPOSE 3000

# Use PORT env var at runtime
CMD ["node", "server.js"]
