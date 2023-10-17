import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import {useNavigate,Link} from 'react-router-dom';
import Emailverify from './Emailverify';
import registercss from './register.module.css';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/regist', formData);
      setMessage(response.data.message);
      navigate('/login')
    } catch (error) {
      console.error(error);
      setMessage('Email already exists.');
    }
  };

  return (
    <div className={registercss.container}>
      <h2 className={registercss.heading}>Registration</h2>
      <div className={ registercss.line}></div>

      <form onSubmit={handleSubmit} className={ registercss.form}>
        <div className="form-group">
      
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
            placeholder='firstname'
            required
          />
        </div>

        <div className="form-group">
        
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
            placeholder='lastname'
            required
          />
        </div>

        <div className="form-group">
         
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder='email'
            required
          />
        </div>

        <div className="form-group">
          
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            placeholder='passwword'
            required
          />
        </div>
        <div className={registercss.buttons}>
        <button type="submit">sign up</button>
        
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
