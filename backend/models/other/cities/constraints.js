module.exports = {
    unique: {
        email:`
                  ALTER TABLE cities
                  ADD CONSTRAINT unique_name
                  UNIQUE(name)
                  `,
        email:`
                  ALTER TABLE cities
                  ADD CONSTRAINT unique_short_form
                  UNIQUE(short_form)
                  `
    },
    
}