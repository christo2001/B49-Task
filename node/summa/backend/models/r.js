const mongoose = require('mongoose');

const us = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        maxlength:30,
    }
})

const u= mongoose.model("u",us);
module.exports = u;