const mysql = require('mysql2/promise');

const db = mysql.createPool({
    host: process.env.DB_HOST || 'trolley.proxy.rlwy.net',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'FTzIMbcfdxjZSuRloyVZHskKpcdNIMkD',
    database: process.env.DB_NAME || 'railway',
    port: process.env.DB_PORT || 3306,   // <-- aquí el cambio
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = db;
