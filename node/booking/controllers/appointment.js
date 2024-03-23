import { Appointment } from "../models/appointment.js";
import { Doctor } from "../models/doctor.js";

export async function postnewbookings(req) {
    const { doctorName, timeSlots, day, date } = req.body;

    try {
        // Find the doctor with the specified name
        const doctor = await Doctor.findOne({ doctorName });

        if (!doctor) {
            throw new Error("Doctor not found");
        }

        // Check if there's an existing appointment for the same doctor, day, and date
        const existingAppointment = await Appointment.findOne({
            doctorID: doctor._id,
            day: day,
            date: date,
            timeSlots:timeSlots
        });

        if (existingAppointment) {
            // If an appointment exists for the same doctor, day, and date,
            // check if the requested time slot is already booked
            const isTimeSlotBooked = existingAppointment.timeSlots.includes(timeSlots);

            if (isTimeSlotBooked) {
                throw new Error("Appointment already booked for this time");
            }
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
