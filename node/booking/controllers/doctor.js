import { Doctor } from "../models/doctor.js";


export function getdoctornyname(request){
    return Doctor.findOne({
        doctorname:request.body.doctorname,
        specialization:request.body.specialization
    });
}