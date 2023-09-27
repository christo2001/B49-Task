
import React, { useState } from 'react';
import axios from 'axios';
import './form.css'

function ChangePassword() {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/changepassword', { email, newPassword });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('wrong credentials.');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>New Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Change Password
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ChangePassword;