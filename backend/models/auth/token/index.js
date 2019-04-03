const sequelize = require('../../../utils/database');

const OutstandingToken = require('./model');
const table = require('./table');
const constraints = require('./constraints');
const triggers = require('./triggers');
const procedures = require('./procedures');
const methods = require('./methods');


OutstandingToken.sqlCommands = {
    table: table,
    constraints: constraints,
    triggers: triggers,
    procedures: procedures,
};

OutstandingToken.createTable = async function (options) {
    const {table} = this.sqlCommands;
    const force = (options && options.force) || false;
    let queryResult;
    try {
        if (force) {
            console.log(table.dropCascade);
            queryResult = await sequelize.query(table.dropCascade);
        } else {
            console.log(table.drop);
            queryResult = await sequelize.query(table.drop);
        }

        queryResult = await sequelize.query(table.exists);

        if (queryResult[0].length > 0) {
            throw new Error("Drop Failed!. force was set to " + force);
        }

        console.log(table.create);
        queryResult = await sequelize.query(table.create);
        // console.log(queryResult);
    } catch (error) {
        console.log(error);
    }
};

OutstandingToken.createConstraints = async function (options) {
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
        console.log(error);

    }
};

OutstandingToken.createAll = async function (options){
  await this.createTable(options);
  await this.createConstraints(options);
};
/* Set all method prototypes */
// OutstandingToken.prototype.x = methods.x;

module.exports = OutstandingToken;