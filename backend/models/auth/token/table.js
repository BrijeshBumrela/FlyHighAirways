module.exports = {
    create: `
            CREATE TABLE IF NOT EXISTS tokens (
            "token" varchar(100) PRIMARY KEY,
            user_id INT
            )
            `,
    exists: `
            SELECT * FROM information_schema.tables 
            WHERE table_schema='public' 
            AND table_name='tokens'
            `,
    drop:`
            DROP TABLE IF EXISTS tokens RESTRICT
            `,
    dropCascade:`
            DROP TABLE IF EXISTS tokens CASCADE
            `,
    findAll:`
            SELECT * FROM tokens
            `
};
