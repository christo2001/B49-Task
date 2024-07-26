import mongoose from "mongoose";
import { type } from "os";

const agentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    }
})

const Agent = mongoose.model("agent",agentSchema)
export{Agent}