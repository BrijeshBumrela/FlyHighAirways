const models = require('../models');
// const sequelize = require('./database/connect');

/*
sequelize.sync({ "force": true }).then(result => {
    console.log(result);
    console.log("Models synced!", result.models);
    console.log("db synced!");
}).catch(err => {
    console.log(err);
    console.log("Sync Failed!");
});
*/


models.auth.User.createAll({ "force": true }).then(result => {
    return models.auth.OutstandingToken.createAll({ "force": true });
}).then(result => {
    return models.scheduledTask.ScheduledTask.createAll({ "force": true });
}).then(result => {
    return models.scheduledTask.CronLog.createAll({ "force": true });
}).catch(err => {
    console.log(err, "\nERRORED!")
});

