import { Appointment } from "../models/appointment.js";
import { Doctor } from "../models/doctor.js";

export async function postnewbookings(req) {
    const { doctorName, times, day, date } = req.body;

    try {
        // Find the doctor with the specified name
        const doctor = await Doctor.findOne({ doctorName });

        if (!doctor) {
            throw new Error("Doctor not found");
        }

        // Check if there's an existing appointment for the same doctor, day, date, and time
        const existingAppointment = await Appointment.findOne({
            doctorID: doctor._id,
            times: times,
            day: day,
            date: date
        });

        if (existingAppointment) {
            throw new Error("Appointment already booked for this time");
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
