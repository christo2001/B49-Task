const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: String,
    cmentor: { type: mongoose.Schema.Types.ObjectId, ref: "Mentor1" },
    pmentor: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mentor1" }]
});

const Student = mongoose.model("Student1", studentSchema);

module.exports = Student;
