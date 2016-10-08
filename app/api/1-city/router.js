'use strict';

const express = require('express');
const router = express.Router();

const db = require('modules/connect-db');
const citiesList = require('modules/city-list');

router.param('city', (req, res, next, city) => {
    if (!citiesList.includes(req.params.city)) {
    	return next(new Error("Unfortunately our service coudn't provide any info about this city"));
    }
    return next();
});

router.get('/:city', (req, res, next) => {
    const city = req.params.city;
    const cityDb = db.useDb(city);
    cityDb.model('category').find().exec().then(categories => {
        if (categories) {
            const city = categories[0].city.toObject();
            res.render('city', { categories, city });
        } else {
            // TODO return page there aren't any categories in this city
        }
    }).catch(next);
});

module.exports = router;