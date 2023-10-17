const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require('dotenv').config();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");



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
    const { firstname,lastname,email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
  
    const user = new User({ firstname,lastname,email, password: hashedPassword });
  
    try {
      await user.save();
      res.json({ message: "we have sent you a verification mail to your registered email id" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "An error occurred while registering the user!" });
    }
});

  

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const customer = await User.findOne({ email });

  if (!customer) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! User does not exist." });
  }

  const passwordMatch = await bcrypt.compare(password, customer.password);

  if (!passwordMatch) {
    return res
      .status(401)
      .json({ message: "Authentication Failed! Password does not match." });
  }

  const token = jwt.sign(
    { email: customer.email, role: "user" }, // Use customer.email instead of User.email
    process.env.SECRET_KEY, // Ensure SECRET_KEY is defined in your .env file
    { expiresIn: "1h" }
  );

  res.json({ token });
});

//--------------------------------------------------------------------------------------

app.post('/forgetpasswords', async (req, res) => {
  try {
      const { email } = req.body; // Extract the email from req.body

      const check = await User.findOne({ email });

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
        subject: 'Sending Forget Password Email using Node.js',
        html: '<a href="http://example.com/changepassword">Reset Password link</a>'
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

 //using this api we can change password to our registered email

 app.post('/changepassword', async (req, res) => {
  try {
    const { email, newPassword } = req.body; // Extract email and newPassword

    // Find the user by email
    const user = await User.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the user's password with the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10); // Use newPassword here
    user.password = hashedPassword; // Update the user's password

    // Save the updated user data
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    res.status(400).send(error);
  }
});

//----------------------------------------------------------------------

app.get("/api/home", (req, res) => {
  res.json({ message: "Home page accessed successfully!!!" });
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
