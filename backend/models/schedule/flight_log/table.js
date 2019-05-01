module.exports = {
    create: `
            CREATE TABLE IF NOT EXISTS flight_logs (
            id SERIAL PRIMARY KEY,
            flight_no INT NOT NULL,
            aircraft_id INT NOT NULL,
            source INT NOT NULL,
            destination INT NOT NULL,
            start_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            end_time TIMESTAMP WITH TIME ZONE
            )
            `,
    exists: `
            SELECT * FROM information_schema.tables 
            WHERE table_schema='public' 
            AND table_name='flight_logs'
            `,
    drop:`
            DROP TABLE IF EXISTS flight_logs RESTRICT
            `,
    dropCascade:`
            DROP TABLE IF EXISTS flight_logs CASCADE
            `,
    findAll:`
            SELECT * FROM flight_logs
            `
};