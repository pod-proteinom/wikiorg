'use strict';

module.exports = {
    server : {
        port: '4000'
    },
    mongoose: {
        uri: `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@db:27017/`,
        options: {
            server: {
                socketOptions: {
                    keepAlive: 1
                },
                poolSize: 5
            }
        }
    },
    logger: {
        level: 'debug',
		colorize: true
    }
}
