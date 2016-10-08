FROM mongo
RUN mkdir -p /data/db
COPY /config/mongod.conf /etc
EXPOSE 27017
CMD ["mongod", "--config", "/etc/mongod.conf"]