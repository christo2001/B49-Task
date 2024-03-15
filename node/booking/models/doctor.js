import { ObjectId } from "bson";
import mongoose from "mongoose";


const doctorschema = new mongoose.Schema({
    doctorname:{
        type:String,
        required:true,
        maxlength:32,
        trim:true,
    },
    specialization:{
        type:String,
        required:true,
        trim:true
    },
    patient:{
        type:ObjectId,
        ref:"patient"
    }
})

const Doctor = mongoose.model("doctor ",doctorschema)
export{Doctor}