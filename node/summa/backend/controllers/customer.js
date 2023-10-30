import { customer } from "../models/customer";
import jwt  from "jsonwebtoken";

export function getuserbyemails(request){
    return customer.findOne({
        email:request.body.email
    })
}

export function generatetoken(id) {
    return jwt.sign({ id }, process.env.SECRET_KEY);
  }