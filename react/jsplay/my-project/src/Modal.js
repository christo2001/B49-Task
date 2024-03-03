import React from 'react';
import './modal.css';

const Modal = ({ formInputValues, selectedCar, onClose }) => {
  // Access the form input values
  const { name, phone, from, destination } = formInputValues;
  

  return (
    <div className='modal-overlay'>
      <div className="modal-open">
        <div className="modal-content">

            <h2>congraluations</h2>
            <p>One of our employee will contact you soon</p>
          {/* <p>Name: {name}</p>
          <p>Phone: {phone}</p>
          <p>From: {from}</p>
          <p>Destination: {destination}</p>
          {/* Access selectedCar directly */}
          {/* <p>Selected Car: {selectedCar}</p> */} 
          <button onClick={onClose} className='mbtn'>close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
