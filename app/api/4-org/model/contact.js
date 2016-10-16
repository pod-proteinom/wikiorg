'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    text: String,
    type: String,
    value: String
});

module.exports = contactSchema;