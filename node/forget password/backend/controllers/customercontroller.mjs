import { customermodel } from "../models/customermodel.mjs"
import jwt  from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
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


// changepassword function
export async function changepassword(token) {
  try {
    // Find the entry in forgetmodel using the provided token
    const changepasswordEntry = await forgetmodel.findOne({ token });

    if (changepasswordEntry) {
      // Log token details for troubleshooting
      console.log('Found token in forgetmodel:', changepasswordEntry);

      // Remove the token from forgetmodel after password change
      await forgetmodel.deleteOne({ token });

      // Fetch user by email and return it for further processing
      const user = await getuserbyemail({ body: { email: changepasswordEntry.email } });

      if (!user) {
        console.log('User not found for email:', changepasswordEntry.email);
        return { success: false, message: 'User not found for the provided email' };
      }

      return user;
    } else {
      // Log token details for troubleshooting
      console.log('Invalid token:', token);
      return { success: false, message: 'Invalid token' };
    }
  } catch (error) {
    console.error('Error in changepassword function:', error);
    return { success: false, message: 'Error occurred during password change' };
  }
}



