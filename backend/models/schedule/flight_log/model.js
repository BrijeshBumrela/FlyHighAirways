const Sequelize = require('sequelize');
const sequelize = require('../../../utils/database/connect');

class FlightLog extends Sequelize.Model {
}

FlightLog.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    flightNo:{
        type: Sequelize.INTEGER
    },
    aircraftId:{
        type:Sequelize.INTEGER
    },
    source:{
        type:Sequelize.INTEGER
    },
    destination:{
        type:Sequelize.INTEGER
    },
    startTime:{
        type:Sequelize.INTEGER
    },
    endTime:{
        type:Sequelize.INTEGER
    }
}, {sequelize, underscored:true, timestamps:false});

// Associations

//export


module.exports = FlightLog;

