'use strict';

const express = require('express');
const router = express.Router();

const db = require('modules/connect-db');
const citiesList = require('modules/city-list');
const categoriesList = require('modules/category-list');

router.param('category', (req, res, next, category) => {
    if (!categoriesList.includes(req.params.category)) {
        return next(new Error("Unfortunately our service coudn't provide any info about this category"));
    }
    return next();
});

router.get('/:city/:category', (req, res, next) => {
    const cityAlias = req.params.city;
    const categoryAlias = req.params.category;

    const cityDb = db.useDb(cityAlias);
    cityDb.model('category').findOne({ alias: categoryAlias }).exec().then(category => {
        if (category) {
            const city = category.city.toObject();
            // TODO separate category info and rubrics
            // const rubrics = category.rubrics;
            res.render('category', { category, city });
        } else {
            // TODO return page there aren't any undercategories in this category
        }
    }).catch(next);
});

module.exports = router;
