const express = require("express");
const app = express()
const bodyparser= require("body-parser");
const mongoose = require("mongoose");

const Mentor = require("./models/mentor")
const Student = require("./models/student")

const port = 3000
const db_url = "mongodb+srv://christolawrenceee:Chris123@cluster0.uobw0gc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

app.use(bodyparser.json());

mongoose
.connect(db_url,{})
.then(()=> console.log("connected to mongo db"))
.catch((err) => console.log("failed"))


app.post('/mentor', async(req,res)=>{
    try{
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(201).send(mentor)
    }catch(error){
        res.status(400).send(error)
    }
})

app.post('/student', async(req,res)=>{
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(201).send(student)
    }catch(error){
        res.status(400).send(error)
    }
})


app.listen(port,()=>{
    console.log("server is running on port",port)
})