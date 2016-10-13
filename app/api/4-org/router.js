'use strict';

const db = require('modules/connect-db');
const router = require('modules/app-router');

router.get('/:city/:category/:rubric/:orgName', (req, res, next) => {
    const city = req.params.city;
    const category = req.params.category;
    const orgName = req.params.orgName;
    const rubric = req.params.rubric;

    const cityDb = db.useDb(city);
    cityDb.model(category).findOne({ alias: orgName }).exec().then(org => {
        if (org) {
            const city = org.city;
            const category = org.getCategory();
            const getRubric = org.getRubric(rubric);
            res.render('org', { org, city, category, rubric: getRubric });
        } else {
            return next();
        }
    }).catch(next);
});

module.exports = router;
