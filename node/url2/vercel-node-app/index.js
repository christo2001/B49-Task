const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());
app.use(cors())

const User = require("./models/register");

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.get('/contact', (req, res) => res.send('Contact Page Route'));

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

const port = process.env.PORT || 3000;
const MONGO_URL ="mongodb+srv://chris:Guvi123@cluster0.rx8quf9.mongodb.net/?retryWrites=true&w=majority"

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
mongoose
  .connect(MONGO_URL, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));