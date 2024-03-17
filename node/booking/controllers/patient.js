import jwt from "jsonwebtoken";
import { Patient } from "../models/patient.js";
import { Appointment } from "../models/appointment.js";

export function getuserbyemail(request){
    return Patient.findOne({
        email:request.body.email,
    });
}

export function getuserbyid(id){
    return Patient.findById(id).select("_id username email")
}

export function generatetoken(id){
    return jwt.sign({id}, process.env.SECRET_KEY)
}

// controllers/appointment.js

export function getuserbooking(patientId) {
    return Appointment.find({ patientID: patientId }).populate("doctorName", "doctorName");
}
