const express = require('express');
const {body: bodyValidator} = require('express-validator/check');

const router = express.Router();
const {auth: authControllers} = require('../controllers');

// POST /auth/register
router.post(
    '/register',
    [
        bodyValidator('email').isEmail().withMessage('Not A valid email').normalizeEmail(),
        bodyValidator('password').isLength({min: 8}).withMessage('Password must be at least 8 characters long'),
    ],
    authControllers.register
);

module.exports = router;