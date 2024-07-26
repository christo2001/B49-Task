import mongoose from "mongoose";

export function databaseconnection(){
    try {
       mongoose.connect(process.env.MONGO_URL)
       console.log('databse connected') 
    } catch (error) {
        console.log(error)
    }
}