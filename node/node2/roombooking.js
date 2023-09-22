// Room bookings
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

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
app.get('/bookings', (req, res) => {
  res.json(roombooking);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });