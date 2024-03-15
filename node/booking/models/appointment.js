import { ObjectId } from "bson";
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: ObjectId,
    ref: 'doctor',
  },
  doctorName: {
    type: String,
  },
  patient:{
    type:ObjectId,
    ref:"patient"
},
  patientName: {
    type: String,
    required:true
  
  },
  // appointmentDate: {
  //   type: String,
  //   required: true
  // }
});

const Appointment = mongoose.model('appointment', appointmentSchema);

export{Appointment}