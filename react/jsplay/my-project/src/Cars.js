import React, { useState,useEffect } from 'react';
import benz from './images/benz.png';
import audiq3 from './images/audiq3.png'
import blogo from './images/benzlogo.jpg'
import bmwlogo from './images/bmwlogo.png'
import audilogo from './images/audilogo.png'
import vwlogo from './images/vwlogo.png'
import hummerlogo from './images/hummerlogo.jpg'
import minilogo from './images/minilogo.webp'
import vwcar from './images/vwcar.png'
import hummer from './images/hummer.webp'
import minicar from './images/minicar.webp'
import bmwcar from './images/bmwcar.webp'
import './cars.css';
import Modal from './Modal';

const cars = {
  car1: {
    specs: {
      name:'Mercedes -AMG GT',
      engine: '4.0-Litre Flat-6',
      horsepower: 630,
      transmission: 'Automatic',
      Mileage:'12.65 kmpl.',
      history: 'The AMG GT 4-Door Coupe is known for its impressive performance capabilities. It typically comes with a range of powerful engines, including V8 options, delivering high horsepower and torque for a thrilling driving experience.Modern infotainment systems, driver-assistance features, and connectivity options are typically integrated into the vehicle to enhance the overall driving experience.',
    },
    image: benz,
    img:blogo
  },
  car2: {
    specs: {
      name:'Volkswagen Taigun',
      engine: 'Engine1.0L TSI',
      horsepower: 550,
      transmission: 'Automatic',
      Mileage:'17.88 kmpl.',
      history: 'The feature-packed new Volkswagen Taigun. Built for those with an appetite for more. Its bold design complements those who’re raring to leave their mark on the world. Its dynamic performance fuels their desire to win. And the German-engineered precision lets them hustle hard, day in day out. For the resilient dreamers. The unapologetic doers. The inextinguishable livewires. Presenting an SUVW, that hustles as hard as them.',
    },
    image: vwcar,
    img:vwlogo
  },

  car3: {
    specs: {
      name:'Audi q3',
      engine: 'I40 TFSI quattro S ',
      horsepower: 184,
      transmission: 'Automatic',
      Mileage:'14.93 kmpl.',
      history: 'The Audi Q3 is a subcompact luxury crossover SUV that has been in production since 2011. It has a transverse-mounted front engine, a large singleframe grille, and vertical struts. The Q3 has a compact footprint, and some say its easy to fit another car in the same spot.',
    },
    image:audiq3,
    img:audilogo
  },

  car4: {
    specs: {
      name:'Hummer H2',
      engine: '6.2-liter V8 engine',
      horsepower: 393,
      transmission: 'Automatic',
      Mileage:'5.1 kmpl.',
      history: 'The Hummer is a brand of pickups and SUVs. The Hummers military roots date back to the High Mobility Multipurpose Wheeled Vehicle (Humvee), which was put into service in 1983. The Humvee was used by the American military during the 1989 invasion of Panama and the Persian Gulf War in the early 1990s',
    },
    image: hummer,
    img:hummerlogo
  },
  car5: {
    specs: {
      name:'Mini Cooper',
      engine: ' 1998cc engine',
      horsepower: 192,
      transmission: 'Manual',
      Mileage:	'13.6 kmpl',
      history: 'The Minis space-saving transverse engine and front-wheel drive layout allows 80% of the cars floorpan to be used for passengers and luggage. TheMinis popularity is attributed to its transverse engine front-wheel drive layout, hip culture, and aesthetic impact among the youth.Alec Issigonis, a top engineer at the Morris Company in England, was given a challenge - design and build a small, fuel-efficient car capable of carrying four adults. It took him two years, but by 1959 he had completed his brief. The MINI was born.',
    },
    image:minicar,
    img:minilogo
  },
  car6: {
    specs: {
      name:'BMW X7 ',
      engine: '2998 cc Engine',
      horsepower: 523 ,
      transmission: 'Manual',
      Mileage:	'114.31 kmpl .',
      history: 'It is BMWs largest and 2nd most expensive SUV in its line-up. The X7 was first announced by BMW in March 2014. It was officially unveiled on October 17, 2018, with pre-orders being taken online. The X7 has been available at dealers since March 2019.',
    },
    image: bmwcar,
    img:bmwlogo
  },
};



const CarComponent = () => {
  const [name, setName] = useState('');
  const [phone, setphone] = useState('');
  const [from, setfrom] = useState('');
  const [destination, setdestination] = useState('');
  const [showmodal, setshowmodal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(Object.keys(cars)[0]); 

  // Add a new state to store form input values
  const [formInputValues, setFormInputValues] = useState({
    name: '',
    phone: '',
    from: '',
    destination: '',
    selectedCar:''
  });

  useEffect(() => {
    setSelectedCar(Object.keys(cars)[0]); // Set the initial selected car to the first car
  }, []); 




  const handleSelectCar = (car) => {
    setSelectedCar(car);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check if selectedCar is defined
    if (!selectedCar || !cars[selectedCar]) {
      alert('Please select a car before submitting the form');
      return;
    }

    // Check if any of the required fields are empty
    if (!name || !phone || !from || !destination) {
      alert('Please fill in all the required fields');
      return; // Prevent form submission
    }

    // Update the form input values state
    setFormInputValues({
      name,
      phone,
      from,
      destination,
      selectedCar,
    });

    // Process the form submission logic here
    // ...

    // For demonstration purposes, let's log the values
    console.log('Form submitted with values:', name, phone, from, destination);
    console.log('Selected Car:', cars[selectedCar].specs.name);

    // You can reset the form fields if needed
    setName('');
    setphone('');
    setfrom('');
    setdestination('');
    setshowmodal(true);
  };


  return (
    <div className="car-container">
    <div className="car-list" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
      {Object.keys(cars).map((car, index) => (
        <div key={index} onClick={() => handleSelectCar(car)} className="car-name" style={{ margin: '15px' }}>
          <img src={cars[car].img} alt={car} style={{ width: '100px', height: '70px' }} />
        </div>
      ))}
    </div>

    {selectedCar && cars[selectedCar]  && (  // Check if cars[selectedCar] exists
      <div className="car-details">
        <div className="car-image">
          <img src={cars[selectedCar].image} alt={selectedCar} style={{ width: '500px', height: '320px' }} />
        </div>

        <div className="car-specs">
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{cars[selectedCar].specs.name}</td>
              </tr>
              <tr>
                <th>Engine</th>
                <td>{cars[selectedCar].specs.engine}</td>
              </tr>
              <tr>
                <th>Horsepower</th>
                <td>{cars[selectedCar].specs.horsepower}</td>
              </tr>
              <tr>
                <th>Transmission</th>
                <td>{cars[selectedCar].specs.transmission}</td>
              </tr>
              <tr>
                <th>Mileage</th>
                <td>{cars[selectedCar].specs.Mileage}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='car-history-column'>
          <p className="car-history">{cars[selectedCar].specs.history}</p>
        </div>
      </div>
    )}
    <div className="car-input">
      {selectedCar && cars[selectedCar] && (
        <input type="text" id="carInput" value={cars[selectedCar].specs.name} readOnly />
      )}
    </div>



  <div className='customer-input'>
  <form onSubmit={handleSubmit}>
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
          onChange={(e) => setphone(e.target.value)}
    
        />
         <input
          type='text'
          placeholder='India'
          readOnly
        
        />
        <input
          type='text'
          placeholder='From'
          value={from}
          onChange={(e) => setfrom(e.target.value)}
        
        />
        <input
          type='text'
          placeholder='Destination'
          value={destination}
          onChange={(e) => setdestination(e.target.value)}
    
        />

<div>
<button>
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


   
{showmodal && (
  <Modal
    // Pass form input values and selectedCar as props to the Modal component
    formInputValues={formInputValues}
    // selectedCar={cars[selectedCar].specs.name}
    onClose={() => setshowmodal(false)}
  />
)}


      </form>
  </div>
 



 
  </div>
      )}

export default CarComponent;
