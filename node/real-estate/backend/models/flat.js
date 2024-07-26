import { ObjectId } from "bson";
import mongoose from "mongoose";
import { type } from "os";

const flatschema = new mongoose.Schema({

    img:{
        type:String,
        required:true
    },

    flatname:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
    },


    location:{
        type:String,
        required:true,
        trim:true
    },

    price:{
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