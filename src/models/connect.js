const mysql = require('mysql'),
  dbConfig = require('../configs/db.config')

const connection = mysql.createConnection(dbConfig);


connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;