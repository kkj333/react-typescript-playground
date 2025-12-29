# ビルドステージ
FROM node:20-alpine AS builder

WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# 本番ステージ
FROM node:20-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /build/dist ./dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
