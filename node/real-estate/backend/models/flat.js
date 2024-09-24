import mongoose from "mongoose";
import { type } from "os";

const flatschema = new mongoose.Schema({
    img: {
        type: String,  // The name of the uploaded image file
        required: true
    },
    cat:{
        type:String
    },
    name:{
        type:String
    } 
});

const Flat = mongoose.model('Flat', flatschema);

export{Flat}
