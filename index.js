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
app.use(express.static(path.resolve("front-end/build")));
// Todas las peticiones GET que no manejamos ahora regresarán nuestra React App
// Agrega esto antes del “app.listen”
app.get("*", (req, res) => {
    res.sendFile(path.resolve("front-end/build", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

// //connection.end();