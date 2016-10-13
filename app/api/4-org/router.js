'use strict';

const express = require('express');
const router = express.Router();

// const rubricUtil = require('category').rubricUtil;

// router.get('/:city/:category/:rubric/:orgName', (req, res, next) => {
// 	const city = req.params.city;
// 	const category = req.params.category;
// 	const orgName = req.params.orgName;
// 	const rubric = req.params.rubric;

// 	if(citiesList.includes(city) && categoriesList.includes(category)) {
// 		const cityDb = db.useDb(city);
// 		cityDb.model(category).findOne({alias: orgName}).exec().then(org => {
// 			if(org) {
// 				const city = org.city;
// 				const category = org.getCategory();
// 				const getRubric = org.getRubric(rubric);
// 				res.render('organisation', {org, city, category, rubric : getRubric});
// 			} else {
// 				return next();
// 			}
// 		}).catch(next);
// 	} else {
// 		next();
// 	}
// });

module.exports = router;