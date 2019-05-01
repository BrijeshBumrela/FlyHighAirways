const Sequelize = require('sequelize');
const sequelize = require('../../../utils/database/connect');

class City extends Sequelize.Model {
}

City.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
}, {sequelize, underscored:true});

// Associations

//export


module.exports = City;

