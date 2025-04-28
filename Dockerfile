# syntax=docker/dockerfile:1
ARG NODE_VERSION=22.13.1

# --------- Build Stage ---------
FROM node:${NODE_VERSION}-slim AS builder
WORKDIR /app

# Install dependencies with cache and bind mounts for deterministic builds
COPY --link package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    npm ci

# Copy the rest of the application
COPY --link . .

# Build the React app for production
RUN npm run build

# Remove dev dependencies and prune node_modules for production
RUN npm prune --production

# --------- Production Stage ---------
FROM node:${NODE_VERSION}-slim AS final
WORKDIR /app

# Security: create non-root user
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

# Copy only necessary files from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./
COPY --from=builder /app/public ./public

ENV NODE_ENV=production
ENV NODE_OPTIONS="--max-old-space-size=4096"

USER appuser

EXPOSE 3000

CMD ["npm", "start"]
