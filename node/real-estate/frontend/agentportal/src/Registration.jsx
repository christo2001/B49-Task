import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';
import './input.css'; // Import the CSS file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap

const Registration = () => {
  const { register, error } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    age: '',
    dob: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 word">Registration</h2>
      <form onSubmit={handleSubmit} className="row g-3 bg-grey bor">
        {/* First Row */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Second Row */}
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

<label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        {/* Third Row */}
        <div className="col-md-6">
          <label htmlFor="dob" className="form-label">Date of Birth</label>
          <input
            type="date"
            className="form-control"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="contact" className="form-label">Contact</label>
          <input
            type="number"
            className="form-control"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-12 text-center btns">
          <button type="submit" className="btn btn-primary mt-3">Register</button>
        </div>
      </form>
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
};

export default Registration;


        