const sequelize = require('../../../utils/database');

const User = require('./model');
const table = require('./table');
const constraints = require('./constraints');
const triggers = require('./triggers');
const procedures = require('./procedures');
const methods = require('./methods');


User.sqlCommands = {
    table: table,
    constraints: constraints,
    triggers: triggers,
    procedures: procedures,
};

User.createTable = async function (options) {
    const {table} = this.sqlCommands;
    const force = (options && options.force) || false;
    let queryResult;
    try {
        if (force) {
            queryResult = await sequelize.query(table.dropCascade);
        } else {
            queryResult = await sequelize.query(table.drop);
        }
        queryResult = await sequelize.query(table.exists);
        if (queryResult[0].length > 0) {
            throw new Error("Drop Failed!. force was set to " + force);
        }

        queryResult = await sequelize.query(table.create);
        console.log(table.create);
        // console.log(queryResult);
    } catch (error) {
        console.log(error);
    }
};

User.createConstraints = async function (options) {
    const {constraints} = this.sqlCommands;
    const all_queries = [];
    for (type in constraints){
        all_queries.push(...Object.values(constraints[type]))
    }

    let queryResult;
    try {
        for (q of all_queries) {
            queryResult = await sequelize.query(q);
            console.log(q);
        }
    } catch (error){
        console.log(queryResult);
        console.log(error);

    }
};

User.createAll = async function (){
  await this.createTable();
  await this.createConstraints();
};
/* Set all method prototypes */
// User.prototype.x = methods.x;

module.exports = User;