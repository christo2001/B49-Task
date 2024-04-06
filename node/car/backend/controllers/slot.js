import { Slot } from "../models/slot.js";
import { Car } from "../models/car.js";

export async function postnewbookings(req) {
    const { carname, day, date, customername,phone } = req.body;

    try {
        // Find the car with the specified name
        const car = await Car.findOne({ carname });

        if (!car) {
            throw new Error("Car not found");
        }

        // Check if there's an existing appointment for the same car, day, and date
        const existingSlot = await Slot.findOne({
            carID: car._id,
            day,
            date
        });

        if (existingSlot) {
            // If an appointment exists for the same car, day, and date,
            // prevent booking
            throw new Error("Car already booked for this day");
        }

        // Create the appointment with the found car's ID
        return new Slot({
            ...req.body,
            customerID: req.customer._id,
            carID: car._id,
        }).save();
    } catch (error) {
        throw new Error("Error creating appointment: " + error.message);
    }
}
