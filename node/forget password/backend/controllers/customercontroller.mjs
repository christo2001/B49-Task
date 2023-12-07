import { customermodel } from "../models/customermodel.mjs"
import jwt  from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import { usermodel } from "../models/verify.js";
import { sendmail } from "./sendmail.js";
import { forgetmodel } from "../models/forget.js";



export async function getuserbyemail(request) {
  return  customermodel.findOne({
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
        const userverify = await forgetmodel.findOne({ token: token });

        if (userverify) {
            const newuser = new usermodel({
                email: userverify.email,
                token:userverify.token
            });

            await newuser.save();
            await forgetmodel.deleteOne({ token: token });

        } 
    } catch (error) {
        console.error(error);
        return `<p>Error occurred</p><h4>Registration failed</h4>`;
    }
}


export async function changepassword(token) {
  try {
    const changepasswordEntry = await forgetmodel.findOne({ token: token });

    if (changepasswordEntry) {
      // Log token details for troubleshooting
      console.log('Found token in forgetmodel:', changepasswordEntry);

      // Remove the token from forgetmodel after password change
      await forgetmodel.deleteOne({ token: token });

      return { success: true, message: 'Password changed successfully' };
      // Assuming you have a sendmail function defined
      const content = `<p>password changed successfully</p><p>Regards</p>`;
            
      // Send email asynchronously and wait for it to complete
      await sendmail(newuser.email, "password changed successfully", content);
    } else {
      // Log token details for troubleshooting
      console.log('Invalid token:', token);
      return { success: false, message: 'Invalid token' };
    }
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Error occurred during password change' };
  }
}




