import { Doctor } from "../models/doctor.js";


export function getdoctornyname(request){
    return Doctor.findOne({
        doctorName:request.body.doctorName,
        specialization:request.body.specialization
    }); 
}



export function getdoctor(req) {
    // Find all doctors and populate the patient field with patientName
    return Doctor.find({}).populate("patient", "patientName");
}

