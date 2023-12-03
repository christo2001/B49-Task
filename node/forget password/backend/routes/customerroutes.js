import express from "express";
import { generatetoken, getuserbyemail,generateUniqueActivationToken,changepassword } from "../controllers/customercontroller.mjs";
import bcrypt from "bcrypt"
import { customermodel } from "../models/customermodel.mjs"
import { sendmail } from "../controllers/sendmail.js";
import { forgetmodel } from "../models/forget.js";


const router = express.Router();


router.post("/registration", async (req, res) => {
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
    verifyuser = await new customermodel({
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
router.post("/loginuser",async(req,res)=>{
    try {
        let Customer = await getuserbyemail(req)
        const token = generatetoken(Customer._id);
        if(!Customer){
            return res.status(400).json({error:"user not exist"})
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
//forget password
router.post("/forgetpasswords", async (req, res) => {
  try {
    // Check if the user exists
    let user = await getuserbyemail(req);

    if (!user) {
      return res.status(400).json({ error: "User not exist" });
    }

    // Generate JWT token using user's email
    const token = generatetoken(req.body.email);
    const content = `<p>Access to change your old password</p>
      <a href="https://656c77ee918b00022af11d7d--relaxed-faun-da5d5a.netlify.app/change/:token">Reset Password</a>`;

    // Create new forgetuser
    const forgetuser = await new forgetmodel({
      email: req.body.email,
      token,
    }).save();

    // Send email using the sendmail function
    await sendmail(req.body.email, 'Change Password', content);

    res.status(201).json({ message: 'Successfully email sent to change password', token });
  } catch (error) {
    console.error("Error in forget password route:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

  

// /changes/:token route
router.post("/changes/:token", async (req, res) => {
  try {
    const { token } = req.params;

    // Use findOneAndUpdate to update the password directly in the database
    const hashedPassword = await bcrypt.hash(req.body.newpassword, 10);
    const user = await forgetmodel.findOneAndUpdate(
      { token },
      { $set: { password: hashedPassword } },
      { new: true }
    );

    if (!user) {
      return res.status(400).json({ success: false, message: 'User not found or invalid token' });
    }

    res.json({ success: true, message: 'Password successfully changed' });
  } catch (error) {
    console.error('Error in /change route:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});




export const userRouter = router;