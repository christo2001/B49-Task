import React, { useState } from 'react';
import axios from 'axios';

const ChangePasswordForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'newPassword') {
      setNewPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend endpoint
      const response = await axios.post('https://forget-password-2zs6.onrender.com/api/user/changepassword', { email, newPassword });

      // Handle the success case
      setMessage(response.data.message);
    } catch (error) {
      // Handle the error case
      setMessage('Error changing password');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Change Password</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </label>
        <br />
        <label>
          New Password:
          <input type="password" name="newPassword" value={newPassword} onChange={handleChange} required />
        </label>
        <br />
        <button type="submit">Change Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePasswordForm;
