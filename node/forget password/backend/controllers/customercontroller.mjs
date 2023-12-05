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

        if (userverify) {
            const newuser = new usermodel({
                email: userverify.email,
                token:userverify.token
            });

            await newuser.save();
            await forgetmodelss.deleteOne({ token: token });

            // Assuming you have a sendmail function defined
            const content = `<p>Successfully registered</p><p>Regards</p>`;
            
            // Send email asynchronously and wait for it to complete
            await sendmail(newuser.email, "password changes successfull", content);

        } 
    } catch (error) {
        console.error(error);
        return `<p>Error occurred</p><h4>Registration failed</h4>`;
    }
}






