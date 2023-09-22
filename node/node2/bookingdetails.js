//booking details
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


const bookingdetails = [
    {roomname:"valhalla", customername:"christo", date:"30-09-2023",start_time:"16.00",end_time:"17.00",bookingdate:"30-09-2023",
    bookingid:1,bookingstatus:"success"
    },
    {roomname:"zenova", customername:"christo", date:"14-09-2023",start_time:"13.00",end_time:"17.00",bookingdate:"14-09-2023",
    bookingid:1,bookingstatus:"success"
    },
    {roomname:"zodiac", customername:"witney", date:"27-09-2023",start_time:"17.00",end_time:"23.00",bookingdate:"27-09-2023",
    bookingid:1,bookingstatus:"success"
    },
  ]
  
  app.get('/getbookingdetails/:name', (req, res) => {
    const name = req.params.name;
    const customerBookings = bookingdetails.filter((booking) => booking.customername === name);
    res.json(customerBookings);
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  