const express = require("express");
const config = require("./config/app");
const app = express();
var faker = require("faker");

require("dotenv").config();

app.get("/home", (req, res) => {
  return res.send("Home Screen");
});

app.get("/login", (req, res) => {
  return res.send("Login Screen");
});

const port = config.appPort;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
