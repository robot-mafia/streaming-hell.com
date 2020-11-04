# Build stage
FROM node:15-alpine as build
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app

RUN apk add --no-cache build-base python3

COPY . .

RUN npm i
RUN npm run build

# Final stage
FROM node:15-alpine
ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL warn
WORKDIR /app

RUN apk add --no-cache build-base python3

COPY --from=build ./app/next.config.js nuxt.config.js
COPY --from=build ./app/package.json package.json
COPY --from=build ./app/package-lock.json package-lock.json
COPY --from=build ./app/.next .next
COPY --from=build ./app/public public

RUN npm ci

EXPOSE 3010
CMD ["npm", "start"]
