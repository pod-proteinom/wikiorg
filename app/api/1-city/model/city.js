'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = new Schema({
	_id: String,
	name: String,
	alias: String,
});

mongoose.model('city', citySchema);

module.exports = citySchema;