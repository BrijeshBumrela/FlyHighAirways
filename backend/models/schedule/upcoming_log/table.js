module.exports = {
    create: `
            CREATE TABLE IF NOT EXISTS upcoming_logs (
            id SERIAL PRIMARY KEY,
            schedule_id REFERENCES schedule(id) NOT NULL,
            departure_date DATE NOT NULL,
            pilot DEFAULT NULL,
            crew DEFAULT NULL,
            )
            `,
    exists: `
            SELECT * FROM information_schema.tables 
            WHERE table_schema='public' 
            AND table_name='upcoming_logs'
            `,
    drop:`
            DROP TABLE IF EXISTS upcoming_logs RESTRICT
            `,
    dropCascade:`
            DROP TABLE IF EXISTS upcoming_logs CASCADE
            `,
    findAll:`
            SELECT * FROM upcoming_logs
            `
};
