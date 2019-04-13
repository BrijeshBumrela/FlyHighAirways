module.exports = {
    unique: {
        flight_no:`
                  ALTER TABLE schedule
                  ADD CONSTRAINT unique_flight_no
                  UNIQUE(flight_no)
                  `
    },
    check:{
        source_destination: `
                    ALTER TABLE schedule
                    ADD CONSTRAINT check_different_source_destination
                    CHECK ( source <> destination )
                    `
    },
};