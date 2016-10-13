'use strict';

const db = require('modules/connect-db');
const router = require('modules/app-router');

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
