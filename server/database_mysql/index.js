var mysql = require('mysql2');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Youssef123@',
  database : 'delivery'
});

module.exports = connection;