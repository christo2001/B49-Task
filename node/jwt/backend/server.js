const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config();
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");

// Use destructuring to assign environment variables
const a = process.env.a;
const b = process.env.b

const Mentor = require("./models/mentor")
const Student = require("./models/student")

app.use(bodyParser.json());
app.use(cors());


mongoose
  .connect(b)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

  app.post('/mentors', async(req,res)=>{
    try{
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).send(mentor)
    }catch(error){
        res.status(400).send(error)
    }
})

app.get('/getmentors', async (req, res) => {
  try {
    const mentors = await Mentor.find(); 

    res.status(200).json(mentors); 
  } catch (error) {
    res.status(500).send(error); 
  }
});

//---------------------------------------------------------------
app.post('/students', async(req,res)=>{
  try{
      const student = new Student(req.body);
      await student.save();
      res.status(201).send(student)
  }catch(error){
      res.status(400).send(error)
  }
})

app.get('/getstudents', async (req, res) => {
try {
  const student = await Student.find(); 

  res.status(200).json(student); 
} catch (error) {
  res.status(500).send(error); 
}
});
//--------------------------------------------------------------------------
app.post('/mentor/:mentorId/assign', async(req,res)=>{
  try {
      const mentor = await Mentor.findById(req.params.mentorId)
      const students = await Student.find({_id:{$in:req.body.students}})

      students.forEach((student)=>{
          student.cmentor = mentor._id
          student.save()
      })

      mentor.students = [
          ...mentor.students,
          ...students.map((student)=> student._id)
      ]
      await mentor.save()
      res.send(mentor)
  } catch (error) {}
})
//--------------------------------------------------------------------------
app.put('/student/:studentId/assignmentor/:mentorId', async (req, res) => {
  try {
      const mentor = await Mentor.findById(req.params.mentorId);
      const student = await Student.findById(req.params.studentId);

      if (student.cmentor) {
          student.pmentor.push(student.cmentor);
      }
      student.cmentor = mentor._id;
      await student.save();
      res.send(student);
  } catch (error) {
      // Handle errors appropriately
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

//--------------------------------------------------------------------------

app.get('/mentor/:mentorId/students', async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId).populate("students");
    const students = mentor.students; // Extract the students array from the mentor object
    res.send(students);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


//-------------------------------------------------------------------------------

app.get('/students/:studentId/mentor', async (req, res) => {
  try {
      const student = await Student.findById(req.params.studentId).populate("pmentor");
      const pmentor = student.pmentor
      res.send(pmentor);
  } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
  }
});

app.listen(a, () => {
  console.log("Server is running on port", a); // Use 'a' instead of 'port'
});
