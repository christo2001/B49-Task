import mongoose from "mongoose";

const customerschema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        maxlength:32,
        trim:true
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
        trim:true
    },
    token: {
      type: String,
  },
    isActive: {
        type: Boolean,
        default: false,
      },
      otp:{
        type:String,
      },
})

const customermodel = mongoose.model("hakunas", customerschema)
export { customermodel };