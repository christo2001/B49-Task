import { Appointment } from "../models/appointment.js"

export function postnewbookings(req){
    return new Appointment({
        ...req.body,
        patientID:req.patient._id
    }).save()
}