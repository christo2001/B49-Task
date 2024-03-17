import { Appointment } from "../models/appointment.js"
import { Doctor } from "../models/doctor.js";

export async function postnewbookings(req) {
    // Assuming doctorName is provided in the request body
    const doctorName = req.body.doctorName;

    try {
        // Find the doctor with the specified name
        const doctor = await Doctor.findOne({ doctorName });

        if (!doctor) {
            throw new Error("Doctor not found");
        }

        // Create the appointment with the found doctor's ID
        return new Appointment({
            ...req.body,
            patientID: req.patient._id,
            doctorID: doctor._id,
        }).save();
    } catch (error) {
        throw new Error("Error creating appointment: " + error.message);
    }
}



