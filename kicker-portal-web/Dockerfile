FROM smebberson/alpine-nginx-nodejs

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm install
RUN npm run build
RUN cp -r /usr/src/app/dist/* /usr/html/

EXPOSE 80
