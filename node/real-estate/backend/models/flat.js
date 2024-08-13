import { ObjectId } from "bson";
import mongoose from "mongoose";
import { type } from "os";

const flatschema = new mongoose.Schema({

    img:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    agent:{
        type:ObjectId,
        ref:'agent'
    }
})

const Flat = mongoose.model("flat", flatschema)
export{Flat}