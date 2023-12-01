const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory data storage
const rooms = [];
const bookings = [];
const customers = [];

// Middleware for parsing JSON requests
app.use(bodyParser.json());

// 1. Create a room
app.post('/rooms', (req, res) => {
  const { roomName, seatsAvailable, amenities, pricePerHour } = req.body;

  const room = {
    id: rooms.length + 1,
    roomName,
    seatsAvailable,
    amenities,
    pricePerHour,
  };

  rooms.push(room);
  res.json(room);
});

// 2. Book a room with improved date and time conflict check
app.post('/bookings', (req, res) => {
  const { customerName, date, startTime, endTime, roomId, customerId } = req.body;

  const room = rooms.find((r) => r.id === roomId);
  if (!room) {
    return res.status(400).json({ error: 'Room not found' });
  }

  // Convert start and end times to Date objects for easier comparison
  const bookingStartTime = new Date(startTime);
  const bookingEndTime = new Date(endTime);

  // Check for date and time conflicts
  const conflictBooking = bookings.find(
    (booking) =>
      booking.roomId === roomId &&
      booking.date === date &&
      !(bookingEndTime <= new Date(booking.startTime) || bookingStartTime >= new Date(booking.endTime))
  );

  if (conflictBooking) {
    return res.status(400).json({ error: 'Room already booked for the specified date and time' });
  }

  // Create a new booking with customerId
  const newBooking = {
    id: bookings.length + 1,
    roomName: room.roomName,
    customerName,
    date,
    startTime,
    endTime,
    roomId,
    customerId, /* You should set customerId here based on your application logic */
  };

  bookings.push(newBooking);
  res.json(newBooking);
});



// 3. List all rooms with booked data
app.get('/rooms/booked-data', (req, res) => {
  const result = rooms.map((room) => {
    const booking = bookings.find((b) => b.roomId === room.id);
    return {
      roomName: room.roomName,
      bookedStatus: booking ? 'Booked' : 'Available',
      customerName: booking ? booking.customerName : null,
      date: booking ? booking.date : null,
      startTime: booking ? booking.startTime : null,
      endTime: booking ? booking.endTime : null,
    };
  });

  res.json(result);
});

// 4. List all customers with booked data
app.get('/customers/booked-data', (req, res) => {
  const result = bookings.map((booking) => {
    const room = rooms.find((r) => r.id === booking.roomId);
    return {
      roomName: room.roomName,
      customerName: booking.customerName,
      date: booking.date,
      startTime: booking.startTime,
      endTime: booking.endTime,
    };
  });

  res.json(result);
});

// 5. List customer booking details
app.get('/customers/:customerId/bookings', (req, res) => {
  const customerId = parseInt(req.params.customerId);

  const result = bookings
    .filter((booking) => booking.customerId === customerId)
    .map((booking) => {
      const room = rooms.find((r) => r.id === booking.roomId);
      return {
        roomName: room.roomName,
        customerName: booking.customerName,
        date: booking.date,
        startTime: booking.startTime,
        endTime: booking.endTime,
        bookingId: booking.id,
        bookingDate: booking.bookingDate,
        bookingStatus: booking.bookingStatus,
      };
    });

  res.json(result);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
