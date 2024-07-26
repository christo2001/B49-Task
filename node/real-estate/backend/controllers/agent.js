import { Agent } from "../models/agent.js"
import jwt from "jsonwebtoken";

export function getuserbyemail(request){
    return Agent.findOne({
        email:request.body.email
    })
}


export function getuserbyid(id){
    return Agent.findById(id).select("_id name email")
}

export function generatetoken(id){
    return jwt.sign({id}, process.env.SECRET_KEY)
}