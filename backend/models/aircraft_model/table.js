module.exports = {
    create: `
            CREATE TABLE IF NOT EXISTS aircraftmodels (
            id SERIAL PRIMARY KEY,
            manufracture_id VARCHAR(50),
            model_no VARCHAR(50) NOT NULL,
            no_of_seats INT NOT NULL,
            name VARCHAR(50),
            max_weight FLOAT,
            manufacture_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            maintenance_date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
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
