const express = require("express");
const app = express()
const bodyparser= require("body-parser");
const mongoose = require("mongoose");
require('dotenv').config()

const Mentor = require("./models/mentor")
const Student = require("./models/student")

const port = 3000
const db_url = "mongodb+srv://christolawrenceee:Chris123@cluster0.uobw0gc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

app.use(bodyparser.json());

mongoose
.connect(db_url,{})
.then(()=> console.log("connected to mongo db"))
.catch((err) => console.log("failed"))

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

//-----------------------------------------------------------------



app.listen(port,()=>{
    console.log("server is running on port",port)
})