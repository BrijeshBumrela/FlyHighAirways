const Sequelize = require('sequelize');
const sequelize = require('../../../utils/database');

const User = require('../user');

class OutstandingToken extends Sequelize.Model {
}

OutstandingToken.init({

    token:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey:true
    }
}, {sequelize, underscored:true});

// Associations
OutstandingToken.belongsTo(User);
User.hasMany(OutstandingToken);
//export


module.exports = OutstandingToken;

