import mongoose from "mongoose";


const customerschema = new mongoose.Schema({
    customername:{
        type:String,
        required:true,
        maxlength:32,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
    },
})

const Customer = mongoose.model("carcustomer",customerschema)
export{Customer}
