import { ObjectId } from "bson";
import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  carID: {
    type: ObjectId,
    ref: 'doctor',
  },
  carname: {
    type: String,
  },
  customerID:{
    type:ObjectId,
    ref:"patient"
},
  customername:{
    type: String,
  },
  phone:{
    type: String,
  },
  date:{
    type:String
  },

});

const Slot = mongoose.model('slot', slotSchema);

export{Slot}