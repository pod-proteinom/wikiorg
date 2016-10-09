'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const citySchema = require('api/1-city').citySchema;
const rubricSchema = require('api/3-rubric').rubricSchema;

const categorySchema = new Schema({
    org_count: Number,
    region_id: String,
    rubrics: [rubricSchema],
    alias: String,
    branch_count: Number,
    _id: String,
    type: { type: { type: String } },
    name: String,
    city: { citySchema }
});

mongoose.model('category', categorySchema);
