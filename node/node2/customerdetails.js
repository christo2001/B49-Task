const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const customerdetails = [
    {roomname:"zenova", customername:"christo", date:"14-09-2023",start_time:"13.00",end_time:"17.00"},
    {roomname:"gateway", customername:"witney", date:"15-09-2023",start_time:"18.00",end_time:"22.00"},
    {roomname:"ginsberg", customername:"sasi", date:"25-09-2023",start_time:"08.00",end_time:"12.00"},
  ]
  
  app.get('/getcustomerdetails',(req,res)=>{
    res.json(customerdetails)
  })
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });