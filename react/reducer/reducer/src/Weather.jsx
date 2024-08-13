import React, { useState } from 'react';

function Weather() {
    const [inputName, setInputName] = useState(''); // For user input
    const [cityName, setCityName] = useState(''); // For the city name from the API
    const [temp, setTemp] = useState('');
    const API = 'a65ac434702dde62ec733141face8c6c';

    async function fetchData() {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputName}&appid=${API}`;

        try {
            const response = await fetch(url);
      
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
      
            const data = await response.json();
            setCityName(data.name); // Update with the city name from the API
            setTemp(Math.round(data.main.temp - 273.15)); // Convert Kelvin to Celsius and round it
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <h1>Weather App</h1>
            <input 
                type='text' 
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                placeholder="Enter city name"
            />
            <button type='submit' onClick={fetchData}>Submit</button>
            {cityName && <h2>{cityName}</h2>}
            {temp && <p>Temperature: {temp}°C</p>}
        </div>
    );
}

export default Weather;
