import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import registercss from './register.module.css';

function ForgotPassword() {
  const navigate = useNavigate(); // Define navigate here
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/forgetpasswords', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Enter your registered email address');
      console.error(error);
    }
  };

  return (
    <div className={registercss.container}>
      <h2 className={registercss.heading}>Forgot Password</h2>
      <div className={ registercss.line}></div>

      <form onSubmit={handleSubmit} className={ registercss.form}>
        

        <div className="form-group">
        <input
            type="email"
            className="form-control"
            placeholder="Enter Your Registered Email"
            value={email}
            onChange={handleEmailChange}
          />
         
        </div>

        
        <div className={registercss.buttons}>
        <button type="submit" className="btn btn-primary">
          Send Email
        </button> 
        
        </div>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotPassword;

  