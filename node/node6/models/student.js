const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    cmentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor" },
    pmentor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mentor" }]
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
