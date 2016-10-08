'use strict';
const conf = require('config');
const join = require('path').join;

const middlewares = [
    'middlewares/log-req'
];

const api = [
	'api/0-home'
];

const handlers = middlewares.concat(api);

exports.importHandler = require('./lib/import-handler');

exports.handlers = handlers;