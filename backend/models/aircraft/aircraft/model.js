const Sequelize = require('sequelize');
const sequelize = require('../../../utils/database/connect');

class Aircraft extends Sequelize.Model {
}

Aircraft.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
}, {sequelize, underscored:true});

// Associations

//export


module.exports = Aircraft;

