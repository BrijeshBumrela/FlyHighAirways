const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {validationResult} = require('express-validator/check');

const {auth:{User}} = require('../models');

exports.register = (req, res, next) => {
    console.log("here");
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        const err = new Error("Validation Failed!");
        err.statusCode = 422;
        err.data = errors.array();
        throw err;
    }

    const {email,password,first_name,last_name} = req.body;

    console.log(email, password, first_name, last_name);
    res.status(201).json({message: "Ha Ha!"});


};