import React, { useState } from 'react';
import axios from 'axios';
import img2 from '../images/image3.png';
import passwordcss from './password.module.css';
import { useParams, useNavigate } from 'react-router-dom';

function Password() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const { token } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'newPassword') { // <-- Update to 'newPassword'
      setNewPassword(value);
    }
  };
  


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `https://forget-password-2zs6.onrender.com/api/user/changepassword/${token}`,
        {
          email: email, // Ensure this property is named 'email'
          newPassword: newPassword, // Ensure this property is named 'newPassword'
        }
      );

      console.log('Success:', response.data);
      setSuccessMessage('Password changed successfully!');
      setError(null);
      // Navigate to login after a 2-second delay
      const delayInSeconds = 2;
      const intervalId = setInterval(() => {
        clearInterval(intervalId);
        navigate('/login');
      }, delayInSeconds * 1000);
    } catch (error) {
      console.error('Error:', error);
      setError(error.response?.data?.message || 'An error occurred');
      setSuccessMessage('');
    }
  };
  return (
    <div className={passwordcss.body}>
      <section className={passwordcss.side}>
        <img src={img2} alt="Side Image" />
      </section>

      <section className={passwordcss.main}>
        <div className={passwordcss.logincontainer}>
          <div className={passwordcss.title}>welcome</div>
          <div className={passwordcss.seprator}></div>
          <p className={passwordcss.welcomemessage}>
            Please provide the registered email to proceed and have access to change the password.
          </p>


          <form onSubmit={handleSubmit} className={passwordcss.loginform}>
            <div className={passwordcss.formcontrol}>
              <input
                type='email'
                placeholder='email'
                name='email'
                id='email'
                className={passwordcss.inputfield}
                onChange={handleChange}
                value={email}
                required
              />
            </div>

            <div className={passwordcss.formcontrol}>
            <input
  type='password'
  placeholder='password'
  name='newPassword'  // <-- Corrected name
  id='password'
  className={passwordcss.inputfield}
  onChange={handleChange}
  value={newPassword}
  required
/>

            </div>

            <button type='submit' className={passwordcss.submits}>
              Submit
            </button>

            {error && <div className={passwordcss.error}>{error}</div>}
          {successMessage && <div className={passwordcss.success}>{successMessage}</div>}
          </form>
        </div>
      </section>
    </div>
  );
}

export default Password;
