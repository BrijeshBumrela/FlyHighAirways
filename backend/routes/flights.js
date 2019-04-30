const express = require('express');
const {body: bodyValidator} = require('express-validator/check');
const router = express.Router();
const Schedule = require("../models/schedule/schedule")

exports.getAllFlights = (req, res, next) => {
    Schedule.findAll().then(flights => flights)
    .catch(err => {
        console.log(err);
        }
    );
}

exports.getFlightsBySourceAndDestination = (req, res, next) => {
    const source = req.bodyValidator.source;
    Schedule.findAll({where: {source: source}})
    .then(flights => {})
    .catch(err => {
        console.log(err);
        }
    );
}