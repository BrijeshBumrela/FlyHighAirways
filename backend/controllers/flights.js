const sequelize = require('../utils/database/connect');
const queryWrappers = require('../utils/query-wrappers');
const sequelizeErrors = require('../utils/sequelize-errors');
const parseError = require('../utils/parse-error');
const {validationResult} = require('express-validator/check');
const Schedule = require("../models/schedule/schedule")


exports.getAllFlights = (req, res, next) => {
    Schedule.findAll().then(flights => {
        return res.status(200).json({flights: flights});
    }
        )
    .catch(err => {
        // console.log(err);
        }
    );
}

exports.getFlightsBySourceAndDestination = (req, res, next) => {
    const source = req.bodyValidator.source;
    const destination = req.bodyValidator.destination;
    Schedule.findAll({where: {source: source, destination: destination}})
    .then(flights => {
        return res.status(200).json({flights: flights}) 
    })
    .catch(err => {
        // console.log(err);
        }
    );
}