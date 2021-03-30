FROM node:alpine

COPY . /opt/app

WORKDIR /opt/app/job-manager-app

RUN yarn install

EXPOSE 3000

CMD yarn dev
