const Sequelize = require('sequelize');
const sequelize = require('../../utils/database');

class User extends Sequelize.Model {
}

User.init({
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    first_name:{
        type:Sequelize.STRING,
        allowNull:true
    },
    last_name:{
        type:Sequelize.STRING,
        allowNull:true
    },
    last_login:{
        type:Sequelize.DATE,
        allowNull:false
    },
    has_password:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
}, {sequelize, underscored:true});

User.sqlCommands = {};

// Table Commands
User.sqlCommands.table = {
        create: `
            CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(50) NOT NULL,
            password VARCHAR(500) NOT NULL,
            first_name VARCHAR(50),
            last_name VARCHAR(50),
            last_login TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
            has_password BOOLEAN NOT NULL DEFAULT TRUE,
            created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
            updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
            )
            `,
        exists: `
            SELECT * FROM information_schema.tables 
            WHERE table_schema='public' 
            AND table_name='users'
            `,
        drop:`
            DROP TABLE IF EXISTS users RESTRICT
            `,
        dropCascade:`
            DROP TABLE IF EXISTS users CASCADE
            `,
        findAll:`
            SELECT * FROM users
            `
    };


//Constraints

User.sqlCommands.constraints = {
        unique: {
            email:`
                  ALTER TABLE users
                  ADD CONSTRAINT unique_email
                  UNIQUE(email)
                  `
        },
        check:{
            password: `
                    ALTER TABLE users
                    ADD CONSTRAINT check_password_length_gte_8
                    CHECK ( LENGTH(password) >=8 )
                    `,
            email: `
                    ALTER TABLE users
                    ADD CONSTRAINT check_email_format
                    CHECK (
                        email = lower(email) AND
                        email LIKE '%@%.%'
                        )
                    `
        },
        index:{
            email:`
                    CREATE UNIQUE INDEX email_btree ON users 
                    USING btree
                    ( email ASC NULLS FIRST)
                    WITH (FILLFACTOR = 80)
                `
            /* NULLS FIRST puts all nulls at the start of the tree. (doesnt matter here as email is NOT NULL)
            FILLFACTOR determines till what percentage each leaf
             of btree is filled before split operation is performed (
             */
        }
};
// Associations

//export

module.exports = User;

