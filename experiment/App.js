const mysql = require('mysql');

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "studio",
    password: ""
});

conn.connect(err => {
    if (err) throw err;
  conn.query("SELECT * FROM `registration`", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});