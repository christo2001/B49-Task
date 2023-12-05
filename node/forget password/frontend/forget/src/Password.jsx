import React, { useState } from 'react';

const ChangePassword = ({ match }) => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  
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
      const token = match.params.token;

      const response = await fetch(`https://forget-password-2zs6.onrender.com/api/user/changepassword/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message || 'Password change failed');
      }
    } catch (error) {
      console.error(error);
      setMessage('Internal error');
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

export default ChangePassword;
