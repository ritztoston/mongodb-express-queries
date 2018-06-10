const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node-test"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");

    const sql = "INSERT INTO users (users_name) VALUES ('asd')";
    con.query(sql, (err, results) => {
        if (err) {
            return console.log("Unable to insert!", err);
        }

        console.log("1 record inserted");
        console.log(JSON.stringify(results.ops, undefined, 2));
        console.log(results);
    });

    con.end();
});

