FROM node:20-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production DATA_DIR=/data PORT=3000
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force
COPY server.js ./
COPY public ./public
COPY scripts ./scripts
RUN mkdir -p /data
# runs as root so a hosting disk mounted at DATA_DIR (owned by root, e.g. Render's /var/data) is writable
VOLUME ["/data"]
EXPOSE 3000
CMD ["node", "server.js"]
