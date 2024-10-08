import mongoose from "mongoose";


const userlistschema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        maxlength:32,
        trim:true,
    },
    lname:{
        type:String,
        required:true,
        maxlength:32,
        trim:true,
    },
    phone:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    address:{
        type:String,
        required:true,
        trim:true,
    },
})

const Userlist = mongoose.model("userlist",userlistschema)
export{Userlist}