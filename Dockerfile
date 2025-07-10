FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY bun.lockb ./

RUN npm install -g bun

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build:production

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
