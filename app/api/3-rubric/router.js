'use strict';

const db = require('modules/connect-db');
const router = require('modules/app-router');

const Promise = require("bluebird");
const generatePagination = require('./lib/pagination');

router.get('/:city/:category/:rubric', (req, res, next) => next('route'));

router.get('/:city/:category/:rubric/:page([0-9]*)?', (req, res, next) => {
    const url = req.originalUrl;
    if (req.params.page == 1) {
        return res.redirect(url.slice(0, url.lastIndexOf('/')));
    }

    const PER_PAGE = 15;
    const city = req.params.city;
    const category = req.params.category;
    const rubric = req.params.rubric;
    const currentPage = parseInt(req.params.page) || 1;

    if (currentPage > 0) {
        const cityDb = db.useDb(city);
        Promise.props({
            orgsCount: cityDb.model(category).find().where('rubrics.alias').in(rubric).count().exec(),
            orgs: cityDb.model(category).find().where('rubrics.alias').in(rubric)
                .skip(PER_PAGE * (currentPage - 1)).limit(PER_PAGE).exec()
        }).then(result => {
            const orgs = result.orgs;
            const pagesCount = Math.ceil(result.orgsCount / PER_PAGE);
            if (orgs.length) {
                const firstOrg = orgs[0];
                const city = firstOrg.city;
                const getCategory = firstOrg.getCategory();
                const getRubric = firstOrg.getRubric(rubric);
                const pages = generatePagination(currentPage, pagesCount);

                res.render('rubric', {
                    orgs,
                    city,
                    pages,
                    currentPage,
                    category: getCategory,
                    rubric: getRubric
                });
            } else {
                //todo render that there aren't any organisation here
                res.json('there aren\'t any organisation here');
            }
        }).catch(next);
    } else {
        next();
    }
});

module.exports = router;
