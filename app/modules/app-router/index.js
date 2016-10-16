'use strict';

const express = require('express');
const router = express.Router();

const citiesList = require('modules/city-list');
const categoriesList = require('modules/category-list');

const ParamsError = require('modules/error');

router.param('city', (req, res, next, city) => {
    if (!citiesList.includes(city)) {
        return next(new ParamsError(`Couldn't find city ${city}`));
    }
    return next();
});

router.param('category', (req, res, next, category) => {
    if (!categoriesList.includes(category)) {
        return next(new ParamsError(`Couldn't find category ${category}`));
    }
    return next();
});

//TODO check rubric name must contain only [a-zA-Z]

module.exports = router;