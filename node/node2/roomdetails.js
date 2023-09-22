// Define a route to get all rooms with booking data
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const roomdetails = [
    {roomname:"zenova", bookingstatus:"success", customername:"christo", date:"14-09-2023",start_time:"13.00",end_time:"17.00"},
    {roomname:"gateway", bookingstatus:"success", customername:"witney", date:"15-09-2023",start_time:"18.00",end_time:"22.00"},
    {roomname:"ginsberg", bookingstatus:"failed", customername:"sasi", date:"25-09-2023",start_time:"08.00",end_time:"12.00"},
  ]
  
  app.get('/getroomdetails',(req,res)=>{
    res.json(roomdetails)
  })
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });