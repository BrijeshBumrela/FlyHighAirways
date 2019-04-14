module.exports = {
    unique: {
        model_no:`
                  ALTER TABLE aircraft_models
                  ADD CONSTRAINT unique_model_no
                  UNIQUE(model_no)
                  `
    },
    check:{
        max_weight: `
                    ALTER TABLE aircraft_models
                    ADD CONSTRAINT max_weight_gt_0
                    CHECK (max_weight > 0)
                    `,
        no_of_seats: `
                    ALTER TABLE aircraft_models
                    ADD CONSTRAINT no_of_seats_gt_0
                    CHECK (no_of_seats > 0)
                    `
    },
};
