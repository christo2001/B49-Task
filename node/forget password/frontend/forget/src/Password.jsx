import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ChangePassword = () => {
  const { token } = useParams();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Token:', token);
  }, [token]);
  

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
      const response = await fetch(`https://forget-password-2zs6.onrender.com/api/user/changepassword/${token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      console.log('Response:', response);

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);
      } else {
        setMessage('Password change failed');
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
