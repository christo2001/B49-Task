import express from "express";
import { generatetoken, getuserbyemail,generateUniqueActivationToken } from "../controllers/customercontroller.mjs";
import bcrypt from "bcrypt"
import { customermodel } from "../models/customermodel.mjs"
import nodemailer from "nodemailer"


const router = express.Router();

//login
router.post("/login",async(req,res)=>{})


//register
router.post("/registered",async(req,res)=>{
    try {
        //check user already exist

        let Customer = await getuserbyemail(req)
        if(Customer){
            return res.status(400).json({error:"user already exist"})
        }

        // generate hashed password

        const salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(req.body.password,salt)
        const uniqueActivationToken = generateUniqueActivationToken();

        Customer = await new customermodel({
            ...req.body,
            password:hashedpassword,
            uniqueActivationToken
        }).save();

        const token = generatetoken(Customer._id);

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'otismelbourn22@gmail.com',
              pass: 'xpur qesj lfvz fwhe'
            }
          });  
          
        const mailConfigurations = { 
          
            from: 'otismelbourn22@gmail.com',
            to: req.body.email,
            subject: 'Sending Forget Password Email using Node.js',
              
            // This would be the text of email body 
            text: `Hi! There, You have recently visited  
                   our website and entered your email. 
                   Please follow the given link to verify your email 
                   http://localhost:3000/api/user/verify/${uniqueActivationToken}  
                   Thanks` 
              
        }; 
          
        transporter.sendMail(mailConfigurations, function(error, info) {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Email could not be sent' });
            }
            console.log('Email Sent Successfully');
            console.log(info);
        });
        
        
        res.status(201).json({message:"successfully logged in",uniqueActivationToken})


    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal error"})
    }
})

router.get('/verify/:token', async (req, res) => {
    const { token } = req.params;

    try {
        // Find the user with the provided activation token
        const user = await customermodel.findOne({ uniqueActivationToken: token });

        if (!user) {
            return res.status(404).json({ error: 'Invalid activation token' });
        }

        if (user.isActive) {
            return res.status(400).json({ error: 'User account is already active' });
        }

        // Activate the user's account
        user.isActive = true;
        await user.save();

        res.status(200).json({ message: 'Account activated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal error' });
    }
});



export const userRouter = router;