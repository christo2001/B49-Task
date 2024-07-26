import React, { useState } from 'react';
import axios from 'axios';

const AddFlat = () => {
  const [flatData, setFlatData] = useState({
    img: '',
    flatname: '',
    location: '',
    price: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlatData({
      ...flatData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Get the token from local storage
      const response = await axios.post('http://localhost:3333/api/flat/add', flatData, {
        headers: {
          'x-auth-token': token // Include the token in the headers
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error occurred while adding flat:', error);
      setMessage('Error occurred while adding flat');
    }
  };

  return (
    <div>
      <h2>Add a New Flat</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            name="img"
            value={flatData.img}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Flat Name:</label>
          <input
            type="text"
            name="flatname"
            value={flatData.flatname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={flatData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            value={flatData.price}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Add Flat</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddFlat;