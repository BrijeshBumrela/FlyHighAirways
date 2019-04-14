const sequelize = require('../../../utils/database/connect');

const AircraftModel = require('./model');
const table = require('./table');
const constraints = require('./constraints');
// const triggers = require('./triggers');
// const procedures = require('./procedures');
const methods = require('./methods');


AircraftModel.sqlCommands = {
    table: table,
    constraints: constraints,
    // triggers: triggers,
    // procedures: procedures,
};

AircraftModel.createTable = async function (options) {
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

AircraftModel.createConstraints = async function (options) {
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


/*

AircraftModel.createTriggers = async function(options){
    const {triggers} = this.sqlCommands;
    Object.keys(triggers).map(async key=>{

        console.log(triggers[key].procedure);
        let result = await sequelize.query(triggers[key].procedure);

        console.log(triggers[key].trigger);
        result = await sequelize.query(triggers[key].trigger);
    });
};
*/

AircraftModel.createAll = async function (options){
    await this.createTable(options);
    await this.createConstraints(options);
    // await this.createTriggers(options);
};
/* Set all method prototypes */
// AircraftModel.prototype.x = methods.x;

module.exports = AircraftModel;