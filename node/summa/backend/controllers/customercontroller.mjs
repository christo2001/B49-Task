import { customermodel } from "../models/customermodel.mjs"
import jwt  from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";

export function getuserbyemail(request){
    return customermodel.findOne({
        email:request.body.email
    })
}

export function generatetoken(id) {
    return jwt.sign({ id }, process.env.SECRET_KEY);
  }

export function generateUniqueActivationToken() {
    const randomUuid = uuidv4();
    const hash = crypto.createHash('sha256');
    const activationToken = hash.update(randomUuid).digest('hex');
    return activationToken;
  }