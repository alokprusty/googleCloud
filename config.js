const mysql = require('mysql');

//create connection
const db = mysql.createConnection({
    host: 'hostName',
    user: 'root',
    password: 'password',
    database: 'database'
});

module.exports = db;
