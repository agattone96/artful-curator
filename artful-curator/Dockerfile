# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.13.1

# --- Build Stage ---
FROM node:${NODE_VERSION}-slim AS builder
WORKDIR /app

# Install dependencies (use npm ci for deterministic builds)
COPY --link package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

# Copy the rest of the application
COPY --link . .

# Build the React app
RUN npm run build

# --- Production Stage ---
FROM nginx:alpine AS final

# Copy built static files to nginx html directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for nginx
EXPOSE 80

# Use non-root user for security
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

CMD ["nginx", "-g", "daemon off;"]
