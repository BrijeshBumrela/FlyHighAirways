const models = require('../models');
const sequelize = require('./database');

sequelize.sync({ "alter": true }).then(result => {
    console.log(result);
    console.log("Models synced!", result.models);
    console.log("db synced!");
}).catch(err => {
    console.log(err);
    console.log("Sync Failed!");
});