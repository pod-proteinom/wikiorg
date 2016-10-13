'use strict';

const conf = require('config');
const mongoose = require('mongoose');
const logger = require('modules/logger');
mongoose.set('pluralization', false);

require('mongoose-double')(mongoose);

// use bluebird promises
mongoose.Promise = require('bluebird');

const db = mongoose.createConnection(conf.mongoose.uri, conf.mongoose.options);

mongoose.connection.on('open', () => {
	logger.info(`connnected to the database`);
});

mongoose.connection.on('error', (err) => {
	logger.error(err);
});

mongoose.connection.on('disconnected', () => {
	logger.info(`Mongoose default connection to DB disconnected`);
});

module.exports = db;