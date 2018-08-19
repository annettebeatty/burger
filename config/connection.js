// Set up MySQL connection.
var mysql = require("mysql");

var connection;

console.log("In connection ", process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3306,
        host: "localhost",
        user: "root",
        password: "devPW123",
        database: "burgers_db",
    });
};
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
