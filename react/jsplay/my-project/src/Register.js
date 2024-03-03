import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send POST request to the backend endpoint
      const response = await axios.post('http://localhost:4000/a/reg', formData);
  
      // Check if response and response.data are defined
      if (response && response.data) {
        // Handle the response
        console.log(response.data.message); // Assuming the backend sends a 'message' property in the response
  
        // Reset the form after successful registration
        setFormData({
          username: '',
          password: '',
          email: '',
        });
      } else {
        console.error('Invalid response format from the server');
      }
    } catch (error) {
      // Check if error.response and error.response.data are defined
      if (error.response && error.response.data) {
        console.error(error.response.data.message);
      } else {
        console.error('An unexpected error occurred:', error.message);
      }
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
