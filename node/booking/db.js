import mongoose from "mongoose";

export function databaseconnection(){

    const params ={
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
    try {

        mongoose.connect(process.env.MONGO_URL,params)
        console.log("mongodb connected")
        
    } catch (error) {
        console.log("mongodb connection failed", error)
    }
}