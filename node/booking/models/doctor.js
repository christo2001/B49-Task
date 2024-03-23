import { ObjectId } from "bson";
import mongoose from "mongoose";

const doctorschema = new mongoose.Schema({
    doctorName:{
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
    },
    image: {
        type: String, // Assuming you'll store the image URL
        default: "" // Provide a default value if needed
    },
    // Adding a field for time slots
    timeSlots: [{
        type: String // Each element in the array is a string representing a time slot
    }]
});

const Doctor = mongoose.model("doctor", doctorschema);
export { Doctor };
