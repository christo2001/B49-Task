import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

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
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        {/* Form inputs */}
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <div>
                    <label>age</label>
                    <input type='number' name="age" value={formData.age}  onChange={handleChange} required />
                </div>

                <div>
                    <label>dob</label>
                    <input type='date' name="dob" value={formData.dob}  onChange={handleChange} required />
                </div>

                <div>
                    <label>contact</label>
                    <input type='number' name="contact" value={formData.contact}  onChange={handleChange} required />
                </div>
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Registration;
