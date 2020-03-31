# Build stage
FROM node:12-alpine as build
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app

RUN apk add --no-cache build-base python3

COPY . .

RUN npm ci
RUN npm run build

# Final stage
FROM node:12-alpine
ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app

RUN apk add --no-cache build-base python3

COPY --from=build ./app/next.config.js nuxt.config.js
COPY --from=build ./app/package.json package.json
COPY --from=build ./app/package-lock.json package-lock.json
COPY --from=build ./app/.next .next

RUN npm ci

EXPOSE 3000
CMD ["npm", "start"]
