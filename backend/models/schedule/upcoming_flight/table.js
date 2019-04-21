module.exports = {
    create: `
            CREATE TABLE IF NOT EXISTS upcoming_flights (
            id SERIAL PRIMARY KEY,
            schedule_id INT NOT NULL,
            flight_no INT NOT NULL,
            aircraft_id INT NOT NULL,
            source INT NOT NULL,
            destination INT NOT NULL,
            start_time TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
            end_time TIMESTAMP WITH TIME ZONE,
            pilot INT ARRAY,
            crew INT ARRAY            
            )
            `,
    exists: `
            SELECT * FROM information_schema.tables 
            WHERE table_schema='public' 
            AND table_name='upcoming_flights'
            `,
    drop:`
            DROP TABLE IF EXISTS upcoming_flights RESTRICT
            `,
    dropCascade:`
            DROP TABLE IF EXISTS upcoming_flights CASCADE
            `,
    findAll:`
            SELECT * FROM upcoming_flights
            `
};
