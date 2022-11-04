FROM --platform=linux/amd64 node:16-alpine

WORKDIR /app

COPY . /app

RUN npm install --production --no-optional

# Starts the service
CMD ["node", "."]


