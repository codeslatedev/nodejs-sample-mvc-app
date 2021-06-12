const {
    Pool
} = require('pg')
const pool = new Pool({
    host: 'localhost',
    user: 'your_db_user',
    database: 'your_db_name',
    password: 'your_db_password',
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
})


module.exports = pool
