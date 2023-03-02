# Build for local development
FROM node:18-alpine3.15 AS development

WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./

RUN yarn install --immutable --immutable-cache --check-cache

COPY --chown=node:node . .

USER node

# Build for production
FROM node:18-alpine3.15 AS build

WORKDIR /app

COPY --chown=node:node package.json yarn.lock ./

COPY --chown=node:node --from=development /app/node_modules ./node_modules

COPY --chown=node:node . .

RUN yarn build

ENV NODE_ENV=production

RUN rm -rf /app/node_modules \
    && yarn install --immutable --immutable-cache --check-cache \
    && yarn cache clean

USER node

# Production image
FROM node:18-alpine3.15 AS production

ENV NODE_ENV production

WORKDIR /app

COPY --chown=node:node --from=build /app/node_modules ./node_modules
COPY --chown=node:node --from=build /app/dist ./dist

EXPOSE 80

CMD ["node", "dist/src/main.js"]
