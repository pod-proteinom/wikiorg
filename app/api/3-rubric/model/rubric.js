'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rubricSchema = new Schema({
		name: String,
		alias: String,
		parent_id: String,
		branch_count: Number,
		_id: String,
		type: {type: { type: String }},
		org_count: Number
});

module.exports = rubricSchema;