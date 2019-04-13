module.exports = {
    create: `
            CREATE TABLE IF NOT EXISTS seat_classes (
            id SERIAL PRIMARY KEY,
            name VARCHAR(50),
            )
            `,
    exists: `
            SELECT * FROM information_schema.tables 
            WHERE table_schema='public' 
            AND table_name='aircraftmodels'
            `,
    drop:`
            DROP TABLE IF EXISTS aircraftmodels RESTRICT
            `,
    dropCascade:`
            DROP TABLE IF EXISTS aircraftmodels CASCADE
            `,
    findAll:`
            SELECT * FROM aircraftmodels
            `
};
