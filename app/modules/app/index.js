'use strict';
const conf = require('config');
const join = require('path').join;

const handlers = require('modules/handlers').handlers;
const viewDirs = require('modules/handlers').viewDirs;
const importHandler = require('modules/handlers').importHandler;

const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', viewDirs);
app.locals.basedir = join(conf.server.srcDir, 'views');

handlers.forEach(handler => importHandler(handler, app));

module.exports = app;