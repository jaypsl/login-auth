const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

//middleware for bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db config
const db = require("./config/keys.js").mongoURI;

//connect to mongoose
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

//create a port
const port = process.env.port || 5000;

app.listen(port, () => console.log(`server is running at ${port}`));
