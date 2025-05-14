FROM node:23.10.0-slim as base

WORKDIR /src

FROM base as build

COPY --link package.json ./
RUN npm install

COPY --link . .

RUN npm run build
FROM base

ENV PORT=443
ENV NODE_ENV=production

COPY --from=build /src/.output /src/

EXPOSE 443/tcp
EXPOSE 443/udp

CMD ["node", "--experimental-quic", "server/index.mjs"]
