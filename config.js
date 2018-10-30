const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: '104.155.178.142',
    user: 'root',
    password: 'Rakb@123',
    database: 'rakbdigitalapp_database'
});

module.exports = db;