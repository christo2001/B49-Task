import mongoose from "mongoose";
import bcrypt from "bcrypt"; // Make sure to import bcrypt

const userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    token: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false,
      },
});

const usermodel = mongoose.model("forgetVerifyuser", userschema);

export { usermodel };