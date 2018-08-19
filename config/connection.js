// Set up MySQL connection.
var mysql = require("mysql");

var connection;

var jaws_stuff = "mysql://xu3i6a0c8eq8459q:hswev4hnf9n4u3ur@blonze2d5mrbmcgf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/q44rsks4taxotx55";

console.log("In connection ", process.env.JAWSDB_URL);

if (jaws_stuff)
{
  connection = mysql.createConnection(jaws_stuff);
//if (process.env.JAWSDB_URL) {
//  connection = mysql.createConnection(process.env.JAWSDB_URL);
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
