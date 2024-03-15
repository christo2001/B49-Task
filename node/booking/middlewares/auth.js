import jwt from "jsonwebtoken";
import { getuserbyid } from "../controllers/patient.js";

const isauthorized = async(req,res,next)=>{
    let token;
    if(req.header){
        try {
            token=await req.headers["x-auth-token"]
            const decode = jwt.verify(token,process.env.SECRET_KEY)
            req.patient = await getuserbyid(decode.id)
            next()
        } catch (error) {
            console.log("verification of token failed", error)
        }
    }
}

export{isauthorized}