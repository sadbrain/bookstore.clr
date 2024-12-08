## base stage ##
FROM node:20.17.0-alpine AS base

## build stage ##
FROM base AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM base AS finnal
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
COPY --from=build /app/dist ./dist
COPY --from=build /app/package*.json .
COPY --from=build /app/.env.prod .env
RUN npm install --production=true
RUN chown -R nestjs:nodejs /app && chmod -R 750 /app
USER nestjs
EXPOSE 8080
CMD ["node", "dist/main.js"]