const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student1" }]
});

const Mentor = mongoose.model("Mentor1", mentorSchema);

module.exports = Mentor;
