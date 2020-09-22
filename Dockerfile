FROM node:latest
WORKDIR /src
COPY . .
RUN yarn install && yarn build
CMD ["yarn", "cloudrun"]
