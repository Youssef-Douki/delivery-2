var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "tonykross123/",
  database: "delivery",
});

module.exports = connection;
