'use strict';

const join = require('path').join;

exports.reviewSchema = require('./model/review');

exports.init = () => {
	require('./model/review');
};

exports.router = require(join(__dirname, 'router'));