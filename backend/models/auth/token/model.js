const Sequelize = require('sequelize');
const sequelize = require('../../../utils/database');

const User = require('../user');

class OutstandingToken extends Sequelize.Model {
}

OutstandingToken.init({

    token:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey:true
    },
    is_valid:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
    },
    expires_on:{
        type:Sequelize.DATE,
        allowNull:false
    }
}, {sequelize, underscored:true});

// Associations
OutstandingToken.belongsTo(User);
User.hasMany(OutstandingToken);
//export


module.exports = OutstandingToken;

