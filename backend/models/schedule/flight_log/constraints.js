module.exports = {
    unique: {
        flight_no:`
                  ALTER TABLE flight_logs
                  ADD CONSTRAINT unique_flight_no
                  UNIQUE(flight_no)
                  `
    },
    check:{
        source_destination: `
                    ALTER TABLE flight_logs
                    ADD CONSTRAINT check_different_source_destination
                    CHECK ( source <> destination )
                    `,
        start_end_time: `
                    ALTER TABLE flight_logs
                    ADD CONSTRAINT check_different_start_end_time
                    CHECK (start_time != end_time)
                    `
        // start_time != end_time because flights can start at night and reach next day.
    },
};