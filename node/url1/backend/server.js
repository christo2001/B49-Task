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

const User = require("./models/register");

const PORT = process.env.port
const MONGO_URL = process.env.url

//Connect to MongoDB
mongoose
  .connect(MONGO_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));


  app.post('/regist', async (req, res) => {
    try {
        const {firstname,lastname, email, password } = req.body;

        const registration = new User({firstname,lastname, email, password });

        await registration.save();

        res.status(201).send(registration);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.get('/registere', async (req, res) => {
  try {
    // Use the Register model to query all registered users from the database
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    // Handle errors and send an error response if there's a problem
    res.status(500).json({ message: 'Failed to retrieve registered users', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
