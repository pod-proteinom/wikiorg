'use strict';

const join = require('path').join;

exports.init = () => {
	require('./model/org');
};

exports.router = require(join(__dirname, 'router'));