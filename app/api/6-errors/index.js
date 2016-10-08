'use strict';

exports.init = (app) => {
	app.use((err, req, res, next) => {
		console.log(err)
		res.status(500);
		res.render('500');
	});

	app.use((req, res) => {
		res.status(404);
		res.render('404');
	});
};