import { ObjectId } from "bson";
import mongoose from "mongoose";

const carschema = new mongoose.Schema({
 carname: {
    type: String,
  },
   carimage: {
        type: String,
        default: ""
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    customer:{
        type:ObjectId,
        ref:"customer"
    },
    logoimage: {
        type: String,
        default: ""
    },
    fee:{
        type:String
    },
    
    specs: [{
        engine: {
            type: String,
            required: true
        },
		horsepower: {
            type: String,
            required: true
        },
		transmission: {
            type: String,
            required: true
        },
		mileage: {
            type: String,
            required: true
        },
    }]
});

const Car = mongoose.model("car", carschema);
export { Car };
