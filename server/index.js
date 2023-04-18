// server/index.js
const express = require("express");
const bodyParser = require('body-parser');
const fs = require("fs");


const PORT = process.env.PORT || 3001;
const app = express();
app.use(bodyParser.json());

app.get("/api/movies", (req, res) => {
  fs.readFile(__dirname + "/" + "json/movies.json", "utf8", (err, data) => {
    res.end(data);
  })
})

app.post("/api/movies", (req, res) => {
  console.log('El cuerpo de la peticion:', req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
