var express = require("express");
var cors = require("cors");
var app = express();
require("dotenv").config;
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());

app.get("/products/:id", function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/products", function (req, res, next) {
  pool.query("SELECT * FROM attractions", function (err, rows, field) {
    res.json(rows);
  });
});

app.listen(5000, function () {
  console.log("CORS-enabled web server listening on port 80");
});
