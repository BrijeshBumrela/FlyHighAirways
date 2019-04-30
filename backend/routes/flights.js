const express = require('express');
const {body: bodyValidator} = require('express-validator/check');
const router = express.Router();
const flightControllers = require('../controllers/flights')

router.post(
    '/get_all_flights',
    [
        bodyValidator('flights').not().isEmpty(),
    ],
    flightControllers.getAllFlights
);

router.post(
    '/get_flights_by_source_and_destination',
    [
        bodyValidator('flights').not().isEmpty(),
        bodyValidator('source').not().isEmpty(),
        bodyValidator('destination').not().isEmpty(),
    ],
    flightControllers.getFlightsBySourceAndDestination
);

router.post(
    '/get_all_cities',
    [
        bodyValidator('cities').not().isEmpty(),
    ],
    flightControllers.getAllCities
);
