module.exports = {
    unique: {
        model_no:`
                  ALTER TABLE seat_classes
                  ADD CONSTRAINT unique_name
                  UNIQUE(name)
                  `
    },
};
