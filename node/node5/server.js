const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// room
const rooms = [];

app.post('/room', (req, res) => {
  const { seats, amenities, pricePerHour } = req.body;

  if (!seats || !pricePerHour) {
    return res.status(400).json({ error: 'Seats and pricePerHour are required' });
  }

  const room = {
    seats,
    amenities,
    pricePerHour,
  };

  rooms.push(room);

  res.status(201).json(room);
});

// Define a route to get all rooms
app.get('/getroom', (req, res) => {
  res.json(rooms);
});


//----------------------------------------------------------------------------------------  


const roombooking = [];

app.post('/bookings', (req, res) => {
  const { customer_name, date, start_time, end_time, room_id } = req.body;

  if (!customer_name || !date || !start_time || !end_time || !room_id) {
    return res.status(400).json({ error: 'Customer name, date, start time, end time, and room id are required' });
  }

  // Check if there's already a booking for the same room with overlapping time
  const isOverlap = roombooking.some((booking) => {
    if (booking.room_id === room_id && booking.date === date) {
      if (
        (start_time >= booking.start_time && start_time < booking.end_time) ||
        (end_time > booking.start_time && end_time <= booking.end_time)
      ) {
        return true;
      }
    }
    return false;
  });

  if (isOverlap) {
    return res.status(400).json({ error: 'Room is already booked for the specified date and time' });
  }

  const roombookings = {
    customer_name,
    date,
    start_time,
    end_time,
    room_id,
  };

  roombooking.push(roombookings);

  res.status(201).json(roombookings);
});

// Define a route to get all room bookings
app.get('/getbookings', (req, res) => {
  res.json(roombooking);
});

//------------------------------------------------------------------------------------------------------------

const roomdetails = [
    {roomname:"zenova", bookingstatus:"success", customername:"christo", date:"14-09-2023",start_time:"13.00",end_time:"17.00"},
    {roomname:"gateway", bookingstatus:"success", customername:"witney", date:"15-09-2023",start_time:"18.00",end_time:"22.00"},
    {roomname:"ginsberg", bookingstatus:"failed", customername:"sasi", date:"25-09-2023",start_time:"08.00",end_time:"12.00"},
  ]
  
  app.get('/getdetails',(req,res)=>{
    res.json(roomdetails)
  })

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  