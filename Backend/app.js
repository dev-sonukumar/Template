require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectToDB = require("./db/db");

connectToDB();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my API!");
});

module.exports = app;
