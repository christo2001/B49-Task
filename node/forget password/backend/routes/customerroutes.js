import express from "express";
import { generatetoken, getuserbyemail,generateUniqueActivationToken, insertverifyuser } from "../controllers/customercontroller.mjs";
import bcrypt from "bcrypt"
import { customermodelss } from "../models/customermodel.mjs"
import { usermodel } from "../models/verify.js";
import { sendmail } from "../controllers/sendmail.js";
import {  forgetmodelss } from "../models/forget.js";


const router = express.Router();


router.post("/registered", async (req, res) => {
  try {
    // Check if user already exists
    let verifyuser = await getuserbyemail(req);
    if (verifyuser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(req.body.password, salt);

    // Generate JWT token using user's email
    const token = generatetoken(req.body.email);

    // Create new user
    verifyuser = await new customermodelss({
      ...req.body,
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
      token,
    }).save();


    res.status(201).json({ message: 'Successfully registered', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal error' });
  }
});



//-------------------------------------------------------------------------------------------------

//login
router.post("/login",async(req,res)=>{
    try {
        let Customer = await getuserbyemail(req)
        const token = generatetoken(Customer._id);
        if(!Customer){
            return res.status(400).json({error:"user not exist"})
        }
        if (!Customer.isActive) {
          return res.status(401).json({ error: 'Account not activated. Check your email for activation instructions.' });
        }
        
        const loginpassword = await bcrypt.compare(req.body.password, Customer.password);
    
        if(!loginpassword){
            res.status(404).json({message:"incorrect password"})
        }
    
        res.json({message:"login successfully",token})
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error' });
    }

})

//-------------------------------------------------------------------------------------------------

router.post("/forgetpassword", async (req, res) => {
  try {
    const { email } = req.body;

    // Find the user by email
    const user = await customermodelss.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate token for password reset
    const token = generatetoken(req.body.email);
    const content = `<p>Access to change your old password</p>
    <a href="http://localhost:5173/verify/:token">"${token}"</a>`;

    // Save token in forgetmodel
    await new forgetmodelss({
      email: req.body.email,
      token,
    }).save();

    

// Send email using the sendmail function
   await sendmail(req.body.email, 'Change Password', content);
    // Send an email to the user with the reset link (optional)

    res.json({ message: 'Token generated successfully',token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal error' });
  }
});

//------------------------------------------------------------------
router.get('/verify/:token', async (req, res) => {
  try {
    const response = await insertverifyuser(req.params.token);
    const user = await usermodel.findOne({ verificationToken: req.params.token });

    if (user) {
      user.isActive = true;
      await user.save();
      res.status(200).json({ message: response });
    } else {
      res.status(400).json({ error: "Invalid or already verified token" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
//----------------------------------------------------------------


// Change Password
router.post('/changepassword', async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    // Find the user by email
    const user = await customermodelss.findOne({ email });

    // Check if the user exists
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password with the new hashed password
    user.password = hashedPassword;

    // Save the updated user data
    await user.save();

    res.json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal error' });
  }
});

export const userRouter = router;