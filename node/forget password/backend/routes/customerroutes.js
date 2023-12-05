import express from "express";
import { generatetoken, getuserbyemail,generateUniqueActivationToken, insertverifyuser,changepassword } from "../controllers/customercontroller.mjs";
import bcrypt from "bcrypt"
import { customermodel } from "../models/customermodel.mjs"
import { usermodel } from "../models/verify.js";
import { sendmail } from "../controllers/sendmail.js";
import { forgetmodel } from "../models/forget.js";


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
    
    const verify = `https://6568e8342e05de008bdda5f1--relaxed-faun-da5d5a.netlify.app/verify/:token`;
    const content = `<p>welcome to our app</p>
    <p>please click the above link to activate your account</p>
      <a href="${verify}">click here</a>`;
    

    // Create new user
    verifyuser = await new usermodel({
      ...req.body,
      username: req.body.username,
      email: req.body.email,
      password: hashedpassword,
      token,
    }).save();

    // Send email using the sendmail function
    
    await sendmail(req.body.email, 'registration mail',content);

    res.status(201).json({ message: 'Successfully registered', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal error' });
  }
});



//--------------------------------------------------------------------------------------------
//verifying mail 

router.get('/verify/:token', async (req, res) => {
  try {
    const response = await insertverifyuser(req.params.token);
    const user = await forgetmodel.findOne({ verificationToken: req.params.token });

    if (user) {
      user.isActive = true;
      await user.save();
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ error: "Invalid or already verified token" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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
//forget password
router.post("/forgetpassword", async (req, res) => {
  try {
    // Check if the user exists
    let user = await getuserbyemail(req);

    if (!user) {
      return res.status(400).json({ error: "User not exist" });
    }

    // Generate JWT token using user's email
    const token = generatetoken(req.body.email);
    const content = `<p>Access to change your old password</p>
      <a href="https://6568e8342e05de008bdda5f1--relaxed-faun-da5d5a.netlify.app/change/:token">"${token}"</a>`;

    // Create new forgetuser
    const forgetuser = await new forgetmodel({
      ...req.body,
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

  

///-------------------------------------------------------
router.get('/verify/:token', async (req, res) => {
  try {
    const response = await insertverifyuser(req.params.token);
    const user = await usermodel.findOne({ verificationToken: req.params.token });

    if (user) {
      user.isActive = true;
      await user.save();
      res.status(200).json({ message: "success" });
    } else {
      res.status(400).json({ error: "Invalid or already verified token" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//changepassword
router.post("/change/:token", async (req, res) => {
  try {
    // Check if the user exists
    let customer = await getuserbyemail(req);

    if (!customer) {
      return res.status(400).json({ success: false, error: "User not exist" });
    }

    // Update the user's password with the new password
    const hashedPassword = await bcrypt.hash(req.body.newpassword, 10);
    customer.password = hashedPassword;

    // Save the updated user data
    await customer.save();

    // Remove the token from forgetmodel
    await forgetmodel.findOneAndDelete({ email: req.body.email });

    res.json({ success: true, message: 'Password successfully changed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


  

export const userRouter = router;