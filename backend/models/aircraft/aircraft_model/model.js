const Sequelize = require('sequelize');
const sequelize = require('../../../utils/database/connect');

class AircraftModel extends Sequelize.Model {
}

AircraftModel.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
}, {sequelize, underscored:true});

// Associations

//export


module.exports = AircraftModel;

