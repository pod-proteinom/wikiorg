'use strict';

const path = require('path');
const join = path.join;
const dirname = path.dirname;
const rootDir = dirname(__dirname);
const srcDir = join(rootDir, 'app');

module.exports = {
    server : {
        port: '4000',
        srcDir
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
