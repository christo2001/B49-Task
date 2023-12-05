import { customermodelss } from "../models/customermodel.mjs"
import { forgetmodelss } from "../models/forget.js";
import jwt  from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { usermodel } from "../models/verify.js";
import { sendmail } from "./sendmail.js";



export async function getuserbyemail(request) {
  return  customermodelss.findOne({
      email: request.body.email
  });
}


export function generatetoken(email) {
  return jwt.sign({ email }, process.env.SECRET_KEY);
}



export function generateUniqueActivationToken() {
    const randomUuid = uuidv4();
    const hash = crypto.createHash('sha256');
    const activationToken = hash.update(randomUuid).digest('hex');
    return activationToken;
  }



  export async function insertverifyuser(token) {
    try {
      const userverify = await forgetmodelss.findOne({ token: token });
      
      if (!userverify) {
        console.log('Token not found in forgetmodelss');
        return { error: true, message: "Token not found." };
      }
  
      // Check if this email/token is already present in 'usermodel'
      const existingUser = await usermodel.findOne({
        $or: [{ email: userverify.email }, { verificationToken: token }]
      });
  
      if (existingUser) {
        console.log('Email/Token already exists in usermodel');
        return { error: true, message: "Email/Token already used." };
      }
  
     // Proceed with creating new 'usermodel' entry
     const newuser = new usermodel({
       email: userverify.email,
       verificationToken: token,
       isVerified: false // Add this field to track verification status
     });
  
     await newuser.save();
     console.log('User saved in usermodel:', newuser);
  
     await forgetmodelss.deleteOne({ token: token });
     console.log('Token deleted from forgetmodelss:', token);
     
     return { success: true };
  
    } catch (error) {
       console.error(error);
       return { error: true, message:"Registration failed due to an exception." };
    }
  }






