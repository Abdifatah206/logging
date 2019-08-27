const db = require('mysql');
const dbcon = require('./dbcon.json');
const connection = db.createConnection(dbcon);


module.exports = connection;
