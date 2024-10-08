import { useState } from 'react'
import './App.css'

function App() {
  const countries = [
    { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
    { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
    { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] }
  ];

  // State to track selected country and its cities
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [cities, setCities] = useState([]);

  const handleCountryChange = (e) => {
    const selected = countries.filter((country) => country.value === e.target.value);
    if (selected.length>0) {
      setSelectedCountry(selected[0].name);
      setCities(selected[0].cities); // Update cities based on selected country
    }
  };

  return (
    <>
      <div>
        <h1>Select a Country</h1>
        <select onChange={handleCountryChange}>
          <option value="">-- Select a country --</option>
          {countries.map((country, index) => (
            <option key={index} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>

        {/* Conditionally render cities if a country is selected */}
        {selectedCountry && (
          <div>
            <h2>Cities in {selectedCountry}:</h2>
            <ul>
              {cities.map((city, index) => (
                <li key={index}>{city}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
