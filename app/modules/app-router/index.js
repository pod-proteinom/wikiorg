'use strict';

const express = require('express');
const router = express.Router();

const citiesList = require('modules/city-list');
const categoriesList = require('modules/category-list');

router.param('city', (req, res, next, city) => {
    if (!citiesList.includes(req.params.city)) {
        return next(new Error("Unfortunately our service coudn't provide any info about this city"));
    }
    return next();
});

router.param('category', (req, res, next, category) => {
    if (!categoriesList.includes(req.params.category)) {
        return next(new Error("Unfortunately our service coudn't provide any info about this category"));
    }
    return next();
});

//TODO check rubric name must contain only [a-zA-Z]

module.exports = router;