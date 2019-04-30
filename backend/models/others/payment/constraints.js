module.exports = {
    unique: {
        name:`
                  ALTER TABLE payments
                  ADD CONSTRAINT unique_name
                  UNIQUE(name)
                  `,
        short_form:`
                  ALTER TABLE payments
                  ADD CONSTRAINT unique_short_form
                  UNIQUE(short_form)
                  `
    },
    
}