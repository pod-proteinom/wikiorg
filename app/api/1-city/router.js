'use strict';

const db = require('modules/connect-db');
const router = require('modules/app-router');
const citiesList = require('modules/city-list');

router.get('/:city', (req, res, next) => {
    const city = req.params.city;
    // console.log(city)
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