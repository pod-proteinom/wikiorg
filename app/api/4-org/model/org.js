'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SchemaTypes = mongoose.Schema.Types;

const citySchema = require('api/1-city').citySchema;
const rubricSchema = require('api/3-rubric').rubricSchema;
const reviewSchema = require('api/5-review').reviewSchema;

const categoriesList = require('modules/category-list');

const organisationSchema = new Schema({
	name: String,
	point: {
		lat: SchemaTypes.Double,
		lon: SchemaTypes.Double
	},
	type: {type: { type: String }},
	city: citySchema,
	// schedule
	name_ex: {
		primary: String,
		extension: String
	},
	rubrics: [rubricSchema],
	// contact_groups
	reviews: [reviewSchema],
	address_name: String,
	address: {

	},
	region_id: String,
	org: {
		branch: String,
		id: String,
		name: String,
	},
	_id: String,
	address_comment: String,
	// adm_div: [],
	alias: String
});
organisationSchema.methods.getCategory = function() {
	return this.rubrics.find(rubric => !rubric.parent_id);
};

organisationSchema.methods.getRubric = function(rubricAlias) {
	return this.rubrics.find(rubric => rubric.alias == rubricAlias);
};

organisationSchema.virtual('street').get(function() {
	if(this.address_name)
		return this.address_name.split(',')[0];
	else 
		return '';
});

categoriesList.forEach(category => {
	mongoose.model(category, organisationSchema);
});