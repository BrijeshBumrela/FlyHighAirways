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
    referenceString: {
        type: Sequelize.STRING
    },
    userId: {
        type: Sequelize.ID
    },
    amount:{
        type:Sequelize.INTEGER
    },
    checked:{
        type:Sequelize.BOOLEAN
    },
    refund:{
        type:Sequelize.BOOLEAN
    },
    timestamp:{
        type:Sequelize.DATE
    }
}, {sequelize, underscored: true, timestamps:false});

// Associations

//export


module.exports = City;

