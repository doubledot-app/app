# Stage 1: Build the Vite app
FROM node:23-alpine AS build

# Install pnpm globally
RUN npm install --global pnpm
RUN pnpm config set store-dir .pnpm

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install dependencies and use pnpm store in a mounted directory
RUN --mount=type=cache,id=pnpm,target=/app/.pnpm pnpm install --prefer-offline --prefer-frozen-lockfile

# Copy the rest of the app's source code
COPY . .

# Build the Vite app
RUN pnpm run build

# Stage 2: Serve the app with Nginx
FROM nginx:alpine

# Set environment variable to configure Nginx to listen on port 3000
ENV PORT=3000

# Remove default nginx website configuration
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY docker/nginx-default.conf /etc/nginx/conf.d/default.conf

# Copy built files from previous stage
COPY --from=build /app/build/client /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
