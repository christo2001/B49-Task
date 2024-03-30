import { Doctor } from "../models/doctor.js";


export function getdoctornyname(request){
    return Doctor.findOne({
        doctorName:request.body.doctorName,
        specialization:request.body.specialization,
        timeSlots:request.body.timeSlots,
        fee:request.body.fee
    }); 
}



export function getdoctor(req) {
    // Find all doctors and populate the doctorName field
    return Doctor.find({}).populate("doctorName", "doctorName");
}

export function deletedoctor(req){
    return Doctor.findByIdAndDelete({
        _id:req.params.id,
    });
}


