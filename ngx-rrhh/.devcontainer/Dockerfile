FROM mcr.microsoft.com/devcontainers/javascript-node:20-bookworm

# Install additional dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Install Angular CLI globally
RUN npm install -g @angular/cli@21

WORKDIR /workspace
