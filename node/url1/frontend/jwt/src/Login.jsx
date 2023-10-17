import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';
import registercss from './register.module.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
      const response = await axios.post('http://localhost:3000/login', formData);
      navigate('/home');
    } catch (error) {
      setMessage('Enter your registered email and password');
      console.log(error);
    }
  };

  return (
    <div className={registercss.container}>
      <h2 className={registercss.heading}>Login</h2>
      <div className={ registercss.line}></div>
      <form onSubmit={handleSubmit} className={ registercss.form}>



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
        <button type="submit">log in </button>
        
        </div>
      </form>
      {message && <p>{message}</p>}
      <div>
        <p>
        <Link to='/ForgotPassword'>ForgotPassword</Link>
        </p>
      </div>
    </div>
);

};

export default Login;
