const Sequelize = require('sequelize');
const sequelize = require('../../../utils/database/connect');

class Schedule extends Sequelize.Model {
}

Schedule.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    departure:{
        type:Sequelize.DATE
    },
    aircraftId:{
        type:Sequelize.INTEGER
    },
    source:{
        type:Sequelize.INTEGER
    },
    destination:{
        type:Sequelize.INTEGER
    }
}, {sequelize, underscored:true, timestamps:false});

// Associations

//export


module.exports = Schedule;

