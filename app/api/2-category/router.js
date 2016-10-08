'use strict';

const express = require('express');
const router = express.Router();

// const db = require('dbConnect');
// const citiesList = require('citiesList');
// const categoriesList = require('categoriesList');

// router.get('/:city/:category', (req, res, next) => {
//     const city = req.params.city;
//     const category = req.params.category;

//     if (citiesList.includes(city) && categoriesList.includes(category)) {
//         const cityDb = db.useDb(city);
//         cityDb.model('category').findOne({ alias: category }).exec().then(category => {
//             if (category) {
//                 const city = category.city.toObject();
//                 res.render('categories', { category, city });
//             } else {
//                 // TODO return page there aren't any undercategories in this category
//             }
//         }).catch(next);
//     } else {
//         next();
//     }
// });

module.exports = router;
