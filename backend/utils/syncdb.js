const models = require('../models');
const sequelize = require('./database');

// sequelize.sync({ "force": true }).then(result => {
//     console.log(result);
//     console.log("Models synced!", result.models);
//     console.log("db synced!");
// }).catch(err => {
//     console.log(err);
//     console.log("Sync Failed!");
// });


models.auth.User.createAll({"force":true}).then(result=>{
    models.auth.OutstandingToken.createAll({"force":true});
});
