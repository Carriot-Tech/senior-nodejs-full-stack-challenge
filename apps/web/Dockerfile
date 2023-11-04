FROM node:lts-slim
WORKDIR /app
RUN npm install -g turbo pnpm
COPY . .
RUN pnpm install
