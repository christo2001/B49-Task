import express from "express";
import { generatetoken, getuserbyemail } from "../controllers/customer.js";
import bcrypt from "bcrypt"
import { customer } from "../models/customer.js";

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

        Customer = await new customer({
            ...req.body,
            password:hashedpassword,
        }).save();

        const token = generatetoken(Customer._id);
        res.status(201).json({message:"successfully logged in",token})


    } catch (error) {
        console.log(error)
        res.status(500).json({error:"internal error"})
    }
})

export const customerrouter = router;