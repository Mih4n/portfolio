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

EXPOSE 3000/tcp
EXPOSE 3000/udp

CMD ["node", "--experimental-quic", "server/index.mjs"]
