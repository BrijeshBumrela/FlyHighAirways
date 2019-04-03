module.exports = {
    unique: {
        email:`
                  ALTER TABLE aircraftmodels
                  ADD CONSTRAINT unique_email
                  UNIQUE(email)
                  `
    },
    check:{
        max_weight: `
                    ALTER TABLE aircraftmodels
                    ADD CONSTRAINT max_weight_not_0
                    CHECK (max_weight > 0)
                    `,
        no_of_seats: `
                    ALTER TABLE aircraftmodels
                    ADD CONSTRAINT no_of_seats_not_0
                    CHECK (no_of_seats > 0)
                    `
    },
};
