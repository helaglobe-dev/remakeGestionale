FROM node:26-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:26-alpine AS runtime

LABEL org.opencontainers.image.source="https://github.com/helaglobe-dev/remakeGestionale"

WORKDIR /app

ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=3000 \
    DATABASE_URL=file:/app/data/helaproject.db

RUN mkdir -p /app/data && chown node:node /app/data

COPY --from=build --chown=node:node /app/.output ./.output
# ponytail: Nitro's tracer skips libsql's musl binary; x64 only, add arm64 if the host changes
COPY --from=build --chown=node:node /app/node_modules/@libsql/linux-x64-musl ./.output/server/node_modules/@libsql/linux-x64-musl

USER node
EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
