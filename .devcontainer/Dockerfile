FROM mcr.microsoft.com/devcontainers/typescript-node

WORKDIR /app

RUN git config --global core.autocrlf false
COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

EXPOSE 3000