// server/index.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const mysql = require("mysql");

const PORT = process.env.PORT || 3001;
const app = express();

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "actividad_7",
});

app.use(bodyParser.json());

/* connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
}); */

app.get("/api/movies", (req, res) => {
    fs.readFile(__dirname + "/" + "json/movies.json", "utf8", (err, data) => {
        res.end(data);
    });
});

// ACTIVIDAD 7
app.get("/api/users", (req, res) => {
    connection.connect();
    connection.query("SELECT * FROM users", function (error, results, fields) {
        if (error) throw error;
        console.log("The solution is: ", results);
        res.end(JSON.stringify(results));
    });
    connection.end();
});

app.post("/api/movies", (req, res) => {
    console.log("El cuerpo de la peticion:", req.body);
    res.send(req.body);
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

//connection.end();
