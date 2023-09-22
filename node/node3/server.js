const express = require("express");
const app = express()
const bodyparser= require("body-parser");
const mongoose = require("mongoose");
const port = 3000
const db_url = "mongodb://0.0.0.0:27017/admin"

app.use(bodyparser.json());

const bookschema = new mongoose.Schema({
    title:String,
    author: String,
    date: String
})

const Book = mongoose.model("Book", bookschema)

//connect to mongo db

mongoose
.connect(db_url,{})
.then(()=> console.log("connected to mongo db"))
.catch((err) => console.log("failed"))

// add books
app.post("/book", async(req,res)=>{
    const book = new Book(req.body);
    try{
        const savedbook = await book.save();
        res.status(201).send(savedbook);
    }catch(error){
        res.status(400).send(error.message)
    }
})

//read list of books

app.get("/books",async (req,res)=>{
    try{
        const books = await Book.find();
        res.status(201).send(books);
    }catch(error){
        res.status(400).send(error.message)
    }
})

app.get("/book/:id",async(req,res)=>{
    try{
        const book = await Book.findById(req.params.id)
        res.status(201).send(book)
    }catch(error){
        res.status(400).send(error.message)
    }
})

app.listen(port,()=>{
    console.log("server is running on port",port)
})