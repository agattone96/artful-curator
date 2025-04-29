# --------- Base Build Stage ---------
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the production Next.js app
RUN npm run build

# --------- Production Runner Stage ---------
FROM node:18-alpine AS runner

# Set working directory
WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/next.config.js .
COPY --from=builder /app/node_modules node_modules

# Expose the app port
EXPOSE 3000

# Command to run the app
CMD ["npm", "run", "start"]