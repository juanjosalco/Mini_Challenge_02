// server/index.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const app = express();
const path = require("path");

require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log("Connected to PlanetScale!");

app.use(bodyParser.json());

app.get("/api/movies", (req, res) => {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        connection.query(
            "SELECT * FROM movies",
            function (err, result, fields) {
                if (err) throw err;
                console.log(result);
                res.send(result);
            }
        );
    });
});


// Esto hace que NodeJS sirva los archivos resultado del build de ReactJS
// Esto va antes de nuestros endpoints pero después de la declaración de app.
app.use(express.static(path.resolve("../front-end/build")));
// Todas las peticiones GET que no manejamos ahora regresarán nuestra React App
// Agrega esto antes del “app.listen”
app.get("*", (req, res) => {
    res.sendFile(path.resolve("../front-end/build", "index.html"));
});

// /* connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// }); */

// app.get("/api/movies", (req, res) => {
//     fs.readFile(__dirname + "/" + "json/movies.json", "utf8", (err, data) => {
//         res.end(data);
//     });
// });

// // ACTIVIDAD 7
// app.get("/api/users", (req, res) => {
//     connection.connect();
//     connection.query("SELECT * FROM users", function (error, results, fields) {
//         if (error) throw error;
//         console.log("The solution is: ", results);
//         res.end(JSON.stringify(results));
//     });
//     connection.end();
// });

// app.post("/api/movies", (req, res) => {
//     console.log("El cuerpo de la peticion:", req.body);
//     res.send(req.body);
// });

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// //connection.end();
