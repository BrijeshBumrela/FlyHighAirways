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
    name: {
        type: Sequelize.STRING
    },
    short_form: {
        type: Sequelize.STRING
    }
}, {sequelize, underscored: true, timestamps:false});

// Associations

//export


module.exports = City;

