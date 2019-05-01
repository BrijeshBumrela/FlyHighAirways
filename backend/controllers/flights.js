const sequelize = require('../utils/database/connect');
const queryWrappers = require('../utils/query-wrappers');
const sequelizeErrors = require('../utils/sequelize-errors');
const parseError = require('../utils/parse-error');
const {validationResult} = require('express-validator/check');
const Schedule = require("../models/schedule/schedule")
const City = require("../models/others/city/model.js")
const models = require('../models');



exports.getAllFlights = (req, res, next) => {
    Schedule.findAll().then(flights => {
        return res.status(200).json({flights: flights});
    }
        )
    .catch(err => {
        // console.log(err);
        return next(err)
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
        return next(err)
    }
    );
}

exports.getAllCities = (req, res, next) => {
    City.findAll()
    .then(cities => {
        return res.status(200).json({cities: cities}) 
    })
    .catch(err => {
        // console.log(err);
        return next(err)
    }
    );
}

exports.getBookingsByUser = (req, res, next) => {
    const userID = req.user.id;
    BookedFlights = models.bookings.FlightBooking
    BookedFlights.findAll({where: {id: userID}})
    .then(bookedFlights => {
        return res.status(200).json({bookedFlights: bookedFlights}) 
    })
    .catch(err => {
        // console.log(err);
        return next(err)
    }
    );
}