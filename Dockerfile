FROM node:23.10.0-slim as base

WORKDIR /src

FROM base as build

COPY --link package.json ./
RUN npm install

COPY --link . .

RUN npm run build
FROM base

ENV PORT=3000
ENV NODE_ENV=production

COPY --from=build /src/.output /src/
# Optional, only needed if you rely on unbundled dependencies
# COPY --from=build /src/node_modules /src/node_modules
EXPOSE 3000

CMD [ "node", "server/index.mjs" ]