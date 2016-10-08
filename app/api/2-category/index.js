'use strict';

const join = require('path').join;

exports.init = () => {
	require('./model/category');
}

exports.router = require(join(__dirname, 'router'));