FROM node:24.0.1-slim AS base

# --- BUILD STAGE ---
FROM base AS build

WORKDIR /src
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# --- PRODUCTION STAGE ---
FROM base
WORKDIR /src

ENV PORT=3000
ENV NODE_ENV=production
ENV NITRO_PRESET=node-cluster

RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

COPY --from=build /src/.output /src/
COPY nginx.conf /etc/nginx/nginx.conf
COPY ./certs/ /certs/
RUN rm -f /etc/nginx/sites-enabled/default

CMD ["sh", "-c", "nginx -g 'daemon off;' & node server/index.mjs"]
