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
app.get('/room', (req, res) => {
  res.json(rooms);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

