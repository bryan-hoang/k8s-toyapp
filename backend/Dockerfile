FROM node:latest

RUN mkdir -p /var/app/
WORKDIR /var/app

COPY . .

RUN npm i -g pnpm
RUN pnpm i

CMD pnpm run start
