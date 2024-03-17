import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [doctorName, setDoctorName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDaySelect = (date) => {
        const selectedDateObj = new Date(date);
        const selectedDay = selectedDateObj.toLocaleString('en-us', { weekday: 'long' });

        setSelectedDay(selectedDay);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make a request to book the appointment
            const response = await axios.post('/api/bookings', {
                doctorName: doctorName,
                times: selectedTime,
                day: selectedDay,
                date: selectedDate
            });

            // Appointment booked successfully
            console.log('Appointment booked:', response.data);
        } catch (error) {
            // Handle errors
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div>
            <h2>Book an Appointment</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div>
                <label htmlFor="doctorName">Doctor Name:</label>
                <input type="text" id="doctorName" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="selectedDate">Select Date:</label>
                <input type="date" id="selectedDate" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
                <button onClick={() => handleDaySelect(selectedDate)}>Get Day</button>
            </div>
            <div>
                <label htmlFor="selectedDay">Day:</label>
                <input type="text" id="selectedDay" value={selectedDay} readOnly />
            </div>
            <div>
                <label htmlFor="selectedTime">Select Time:</label>
                <input type="text" id="selectedTime" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Book Appointment</button>
        </div>
    );
}

export default App;
