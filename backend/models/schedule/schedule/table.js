module.exports = {
    create: `
            CREATE TABLE IF NOT EXISTS schedule (
            id SERIAL PRIMARY KEY,
            departure TIME,
            aircraft_id REFERENCES aircrafts(id) NOT NULL,
            source REFERENCES cities(id) NOT NULL,
            destination REFERENCES cities(id) NOT NULL,
            )
            `,
    exists: `
            SELECT * FROM information_schema.tables 
            WHERE table_schema='public' 
            AND table_name='schedule'
            `,
    drop:`
            DROP TABLE IF EXISTS schedule RESTRICT
            `,
    dropCascade:`
            DROP TABLE IF EXISTS schedule CASCADE
            `,
    findAll:`
            SELECT * FROM schedule
            `
};
