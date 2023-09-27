const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

// Use destructuring to assign environment variables
const a = process.env.a;
const b = process.env.b

const Register = require('./models/register')


app.use(bodyParser.json());
app.use(cors());


mongoose
  .connect(b)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

  app.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Create a new instance of the Register model with the data
        const registration = new Register({ email, password });

        // Save the registration data to the database
        await registration.save();

        res.status(201).send(registration);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Define a new route for getting all registered users
app.get('/registeredusers', async (req, res) => {
  try {
    // Use the Register model to query all registered users from the database
    const users = await Register.find();

    // Send the list of registered users as a response
    res.status(200).json(users);
  } catch (error) {
    // Handle errors and send an error response if there's a problem
    res.status(500).json({ message: 'Failed to retrieve registered users', error: error.message });
  }
});
//--------------------------------------------------------------------------------

app.post('/forgetpassword', async (req, res) => {
  try {
      const { email } = req.body; // Extract the email from req.body

      const check = await Register.findOne({ email });

      if (!check) {
          return res.status(400).json({ message: 'Email not registered' });
      }

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'otismelbourn22@gmail.com',
          pass: 'xpur qesj lfvz fwhe'
        }
      });
      
      var mailOptions = {
        from: 'otismelbourn22@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
        html: '<a href="https://www.w3schools.com/nodejs/nodejs_email.asp">Reset Password link</a>'
      };
      
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
      res.json({message:'email sent'})
  } catch (error) {
      res.status(400).send(error);
  }
});

//----------------------------------------------------------------------------------------
app.post('/changepassword', async (req, res) => {
  try {
      const { email, newPassword } = req.body; // Extract email and newPassword

      // Find the user by email
      const user = await Register.findOne({ email });

      // Check if the user exists
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }

      // Update the user's password with the new password
      user.password = newPassword;

      // Save the updated user data
      await user.save();

      res.json({ message: 'Password changed successfully' });
  } catch (error) {
      res.status(400).send(error);
  }
});



app.listen(a, () => {
    console.log("Server is running on port", a); // Use 'a' instead of 'port'
  });
  