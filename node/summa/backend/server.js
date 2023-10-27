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


//Connect to MongoDB
mongoose
  .connect(MONGO_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));


  app.post('/reg', async (req, res) => {
    const { firstname } = req.body;
  
    const userss = new U({ firstname }); // Change "User" to "U"
  
    try {
      await userss.save();
  
      res.json({ message: "User registered successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while registering the user!" });
    }
  });

  app.get('/user/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user = await U.findById(userId); // Assuming you have a model called "U" for users
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred while fetching user data" });
    }
  });
  

  
  

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
  });