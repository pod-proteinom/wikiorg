'use strict';

const logger = require('modules/logger');
const ParamsError = require('modules/error');

exports.init = (app) => {
    if (process.env.NODE_ENV == 'production') {
        app.use((err, req, res, next) => {
            if (err instanceof ParamsError) {
                return next();
            }
            
            logger.error(err.message);
            res.status(500);
            res.render('500');
        });
    }

    app.use((req, res) => {
        res.status(404);
        res.render('404');
    });
};
