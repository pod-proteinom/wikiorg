'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
		creation_time: Date,
		name: String,
		text: String,
		rating: Number
});

module.exports = reviewSchema;