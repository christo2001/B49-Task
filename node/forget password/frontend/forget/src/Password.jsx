import React, { useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ChangePassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const { token } = useParams();

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
      const response = await axios.post(`http://localhost:3000/api/user/changepassword`, {
        email: email,
        newPassword: newPassword,
      });

      console.log("Success:", response.data);
      setSuccessMessage("Password changed successfully!");
      setError(null);

      // Navigate to login after a 2-second delay
      const delayInSeconds = 2;
      const intervalId = setInterval(() => {
        clearInterval(intervalId);
        navigate('/login');
      }, delayInSeconds * 1000);
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "An error occurred");
      setSuccessMessage('');
    }
  };

  return (
    <div>
      {/* Your JSX structure goes here */}
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>New Password:
          <input
            type="password"
            name="newPassword"
            value={newPassword}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Change Password</button>

        {error && <div>{error}</div>}
        {successMessage && <div>{successMessage}</div>}
      </form>
    </div>
  );
}

export default ChangePassword;
