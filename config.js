require('dotenv').config();

module.exports = {
    app: {
        // Prioridad total al puerto que asigne Railway
        port: process.env.PORT || 4000, 
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || '', // Deja vacío por defecto si prefieres
        database: process.env.MYSQL_DB || 'prados2dbv4', 
        port: process.env.MYSQL_PORT || 3306
    },
};