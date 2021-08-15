FROM node:14.17.5-alpine

ENV TZ=Asia/Tokyo
RUN apk --no-cache add tzdata && \
    ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn global add @vue/cli
RUN yarn install

EXPOSE 8080
