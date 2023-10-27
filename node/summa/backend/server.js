const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");




app.use(bodyParser.json());
app.use(cors())

const U = require("./models/r");

const PORT = process.env.port
const MONGO_URL = process.env.url
const SECRET_KEY = process.env.SECRET_KEY;

//Connect to MongoDB
mongoose
  .connect(MONGO_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
  });