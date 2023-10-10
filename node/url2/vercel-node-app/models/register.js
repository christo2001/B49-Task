const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxlength:30,
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        maxlength:30,
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
    }
})

const user = mongoose.model("user",userschema);
module.exports = user;