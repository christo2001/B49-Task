import React, { useState } from 'react';
import book from './assets/bookmark.svg';
import App from './App.jsx'

const CarComponent = () => {
  const cars = {
    car1: {
      specs: 'Specifications for Car 1: Engine: V8, Horsepower: 300, Transmission: Automatic',
      image: book, // Use the imported SVG directly
    },
    car2: {
      specs: 'Specifications for Car 2: Engine: V6, Horsepower: 250, Transmission: Manual',
      image: book, // Use the imported SVG directly
    },
    car3: {
      specs: 'Specifications for Car 3: Engine: Inline-4, Horsepower: 200, Transmission: Automatic',
      image: book, // Use the imported SVG directly
    },
  };

  const [selectedCar, setSelectedCar] = useState('');

  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  return (
    <div>
      <p>Select a car:</p>
      {Object.keys(cars).map((car, index) => (
        <div key={index} onClick={() => handleSelectCar(car)}>
          {car}
        </div>
      ))}

      {selectedCar && (
        <div>
          <img src={cars[selectedCar].image} alt={selectedCar} style={{ maxWidth: '100%' }} />
          <p>{cars[selectedCar].specs}</p>
        </div>
      )}

    </div>
  );
};

export default CarComponent;
