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

app.post("/api/movies", (req, res) => {
    connection.connect(function (err) {
        if (err) throw err;
        let query = `INSERT INTO movies (title, description, image, rating) VALUES (${req.body.title}, ${req.body.description}, ${req.body.image}, ${req.body.rating})`;
        connection.query(
            query, function (err, result, fields) {
                if (err) res.status(500).send(err);
                console.log(result);
                res.send(result);
            }
        )
    })
})

app.delete("/api/movies/:id", (req, res) => {
    connection.connect(function (err) {
        if (err) throw err;
        let query = `DELETE FROM movies WHERE id = ${req.params.id}`;
        connection.query(
            query, function (err, result, fields) {
                if (err) res.status(500).send(err);
                console.log(result);
                res.send(result);
            }
        )
    })
})

app.patch("/api/movies/:id", (req,res) => {
    connection.connect(function(err) {
        if (err) throw err;
        let query = `UPDATE movies SET `;
        if (req.body.title) query += `title = ${req.body.title}, `;
        if (req.body.description) query += `description = ${req.body.description}, `;
        if (req.body.image) query += `image = ${req.body.image}, `;
        if (req.body.rating) query += `rating = ${req.body.rating}, `;
        query = query.slice(0, -2);
        query += ` WHERE id = ${req.params.id}`;
        connection.query(
            query, function (err, result, fields) {
                if (err) res.status(500).send(err);
                console.log(result);
                res.send(result);
            }
        )
    })
})

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