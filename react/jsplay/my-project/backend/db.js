const mongoose = require('mongoose');

function databaseconnection() {
    try {
        mongoose.connect(process.env.url);
        console.log("MongoDB connected");
    } catch (error) {
        console.log("Connection failed", error);
    }
}

module.exports = { databaseconnection };
