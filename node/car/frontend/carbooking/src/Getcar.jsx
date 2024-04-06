import React, { useState, useEffect } from "react";
import axios from "axios";
import './cars.css';

const CarComponent = () => {
  const [cars, setCars] = useState({});
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [bookedDates, setBookedDates] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/car/getcar");
        setCars(response.data.data);
        setSelectedCar(Object.keys(response.data.data)[0]); // Set the initial selected car
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    const fetchBookedDates = async () => {
      try {
        const response = await axios.get("http://localhost:7000/api/slot/bookeddates");
        setBookedDates(response.data); // Update bookedDates state
      } catch (error) {
        console.error("Error fetching booked dates:", error);
      }
    };

    fetchData();
    fetchBookedDates(); // Fetch booked dates when the component mounts
  }, [selectedDate]); // Refetch booked dates when selectedDate changes

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      if (!selectedCar || !cars[selectedCar]) {
        throw new Error('Please select a car before submitting the form');
      }
      if (!selectedDate) {
        throw new Error('Please select a date');
      }
      if (bookedDates[selectedDate] && bookedDates[selectedDate].includes(selectedCar)) {
        throw new Error('The selected car is already booked for the selected date. Please choose another date or car.');
      }
      if (!/^\d+$/.test(phone)) {
        throw new Error('Please enter a valid phone number.');
      }
  
      const token = localStorage.getItem('token');
      const response = await fetch("http://localhost:7000/api/slot/bookslot", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({
          carname: cars[selectedCar].carname,
          day: new Date().getDay(),
          date: selectedDate,
          customername: name,
          phone: phone
        })
      });
      if (!response.ok) {
        throw new Error('Error booking car');
      }
      const data = await response.json();
      console.log('Booking successful:', data);
      setName('');
      setPhone('');
      setSelectedDate('');
  
      // Update bookedDates state after successful booking
      setBookedDates(prevBookedDates => ({
        ...prevBookedDates,
        [selectedDate]: [...(prevBookedDates[selectedDate] || []), selectedCar]
      }));
  
      // Show success message for 5 seconds
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error('Error booking car:', error);
      window.alert(error.message);
    }
  };
  

  const getCurrentDate = () => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    // Add leading zero if month or day is a single digit
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
  };

  const isCarBooked = () => {
    return selectedCar && selectedDate && bookedDates[selectedDate]?.includes(selectedCar);
  };

  return (
    <div className="car-container">
      <div className="car-list" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        {Object.keys(cars).map((car, index) => (
          <div key={index} onClick={() => handleSelectCar(car)} className="car-name" style={{ margin: '15px' }}>
            <img src={cars[car].logoimage} alt={car} style={{ width: '100px', height: '70px' }} />
          </div>
        ))}
      </div>

      {selectedCar && cars[selectedCar] && (
        <div className="car-details">
          <div className="car-image">
            <img src={cars[selectedCar].carimage} alt={selectedCar} style={{ width: '500px', height: '320px' }} />
          </div>

          <div className="car-specs">
            <table>
              <tbody>
                {cars[selectedCar].specs.map((spec, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <th>Name</th>
                      <td>{cars[selectedCar].carname}</td>
                    </tr>
                    <tr>
                      <th>Engine</th>
                      <td>{spec.engine}</td>
                    </tr>
                    <tr>
                      <th>Horsepower</th>
                      <td>{spec.horsepower}</td>
                    </tr>
                    <tr>
                      <th>Transmission</th>
                      <td>{spec.transmission}</td>
                    </tr>
                    <tr>
                      <th>Mileage</th>
                      <td>{spec.mileage}</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>

          <div className='car-history-column'>
            <p className="car-history">{cars[selectedCar].description}</p>
          </div>

        </div>
      )}

      <div className='customer-input'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Selected Car'
            value={selectedCar ? cars[selectedCar].carname : ''}
            readOnly
            style={{ backgroundColor: selectedCar ? 'rgba(8, 8, 56, 0.899)' : 'white', color: "white" }}
          />
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='Contact'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[0-9]*"
            required
          />
          <input
            type='text'
            placeholder='India'
            readOnly
          />
          <input
            type="date"
            id="selectedDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={getCurrentDate()}
            required
          />

          {errorMessage && (
            <div className="error-message">{errorMessage}</div>
          )}

          {showSuccessMessage && (
            <div className="success-message">Booking successful! One of our representatives will contact you soon.</div>
          )}
          <div>
            <button type="submit" className="getcarbtn" disabled={isCarBooked()}>
              R E N T
              <div id="clip">
                <div id="leftTop" className="corner"></div>
                <div id="rightBottom" className="corner"></div>
                <div id="rightTop" className="corner"></div>
                <div id="leftBottom" className="corner"></div>
              </div>
              <span id="rightArrow" className="arrow"></span>
              <span id="leftArrow" className="arrow"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarComponent;
