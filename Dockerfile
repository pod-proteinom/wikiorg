FROM node:6
ENV NPM_CONFIG_LOGLEVEL warn
ENV NODE_PATH ./app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
EXPOSE 4000
CMD ["npm", "start"]