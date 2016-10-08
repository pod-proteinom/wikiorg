'use strict';
const conf = require('config');
const join = require('path').join;

const middlewares = [
    'middlewares/00-log-req'
];

const api = [
	'api/0-home',
	'api/6-errors'
];

const handlers = middlewares.concat(api);
const viewDirs = api.map(api => join(conf.server.rootDir, 'api', api, 'view'));

exports.importHandler = require('./lib/import-handler');

exports.handlers = handlers;

exports.viewDirs = viewDirs;