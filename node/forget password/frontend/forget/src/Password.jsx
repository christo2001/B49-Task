import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function ChangePassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const { token } = useParams();

  useEffect(() => {
    // Fetch user details based on the token to pre-fill the email field
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`https://forget-password-2zs6.onrender.com/api/user/token/${token}`);
        setEmail(response.data.email);
      } catch (error) {
        console.error('Error fetching user details:', error);
        setError('An error occurred while fetching user details');
      }
    };

    fetchUserDetails();
  }, [token]);

  const handleChange = (e) => {
    if (e.target.name === 'newPassword') {
      setNewPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://forget-password-2zs6.onrender.com/api/user/changepassword/${token}`, {
        email: email,
        newPassword: newPassword,
      });

      console.log('Success:', response.data);
      setSuccessMessage('Password changed successfully!');
      setError(null);

      // Navigate to login after a delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Error:', error);
      setError(error.response?.data?.message || 'An error occurred');
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input
            type="email"
            value={email}
            disabled
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

