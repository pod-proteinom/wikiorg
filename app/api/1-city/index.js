'use strict';

const join = require('path').join;

// exports.citySchema = require('./model/city');

exports.init = () => {
	// require('./model/city');
};

exports.router = require(join(__dirname, 'router'));