'use strict';

const join = require('path').join;

exports.rubricSchema = require('./model/rubric');

exports.init = () => {
	require('./model/rubric');
}

exports.router = require(join(__dirname, 'router'));