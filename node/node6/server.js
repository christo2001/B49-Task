const express = require("express");
const app = express();
const bodyparser= require("body-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bcrypt = require("bcrypt");


const Mentor = require("./models/mentor")
const Student = require("./models/student")

const port = 3000

const db_url = "mongodb+srv://christolawrenceee:Chris123@cluster0.uobw0gc.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp"

app.use(bodyparser.json());

mongoose
.connect(db_url,{})
.then(()=> console.log("connected to mongo db"))
.catch((err) => console.log("failed"))

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
  
app.listen(port,()=>{
    console.log("server is running on port",port)
})
