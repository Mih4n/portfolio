FROM node:24.0.1-slim AS base

WORKDIR /src

FROM base AS build

COPY --link package.json ./
RUN npm install

COPY --link . .

RUN npm run build
FROM base

ENV PORT=3000
ENV NODE_ENV=production

COPY --from=build /src/.output /src/
EXPOSE 3000

CMD [ "node", "server/index.mjs" ]
