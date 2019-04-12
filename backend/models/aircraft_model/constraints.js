module.exports = {
    unique: {
        model_no:`
                  ALTER TABLE aircraftmodels
                  ADD CONSTRAINT unique_model_no
                  UNIQUE(model_no)
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
