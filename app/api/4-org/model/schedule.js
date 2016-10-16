'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workingHoursSchema = new Schema({
    working_hours: [{
        to: String,
        from: String
    }]
});

const scheduleSchema = new Schema({
		'Mon': workingHoursSchema, 
		'Tue': workingHoursSchema, 
		'Wed': workingHoursSchema, 
		'Thu': workingHoursSchema, 
		'Fri': workingHoursSchema, 
		'Sat': workingHoursSchema, 
		'Sun': workingHoursSchema,
});

module.exports = scheduleSchema;