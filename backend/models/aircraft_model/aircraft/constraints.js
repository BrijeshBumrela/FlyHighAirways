module.exports = {
    check:{
    no_of_flights: `
                ALTER TABLE aircrafts
                ADD CONSTRAINT no_of_flights_gte_0
                CHECK (no_of_flights > -1)
                `
    },
};
