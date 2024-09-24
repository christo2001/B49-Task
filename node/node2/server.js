const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 7000;

// In-memory data storage
const rooms = [];
const bookings = [];
const customers = [];

// Middleware for parsing JSON requests
app.use(bodyParser.json());

app.get("/gg", async(req,res)=>{
  res.send("chris")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
