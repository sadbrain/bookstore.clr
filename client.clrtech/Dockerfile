## base stage ##
FROM node:20.17.0-alpine AS base

## build stage ##
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN npm install
COPY . .
RUN npm run build

## run stage ##
FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN mkdir .next
COPY --from=deps /app/.next/standalone ./
COPY --from=deps /app/.next/static ./.next/static
COPY --from=deps /app/public ./public

RUN chown -R nextjs:nodejs /app && chmod -R 750 /app

USER nextjs

EXPOSE 80
ENV NODE_ENV=production
ENV PORT=80
ENV HOSTNAME=0.0.0.0

CMD ["node", "server.js"]