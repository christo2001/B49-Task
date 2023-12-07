import React, { useState } from 'react';
import axios from 'axios';
import img2 from '../images/image3.png';
import passwordcss from './password.module.css';
import {useNavigate} from 'react-router-dom'

const ChangePasswordForm = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook
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
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (error) {
      // Handle the error case
      setMessage('Error changing password');
      console.error(error);
    }
  };

  return (
    <div className={passwordcss.body}>
    <section className={passwordcss.side}>
      <img src={img2}/>
    </section>


    <section className={passwordcss.main}>
      <div className={passwordcss.logincontainer}>
        <div className={passwordcss.title}>welcome</div>
        <div className={passwordcss.seprator}></div>
        <p className={passwordcss.welcomemessage}>please provide registered email to proceed and have access to change password</p>


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
            name='newPassword'
            id='password'
            className={passwordcss.inputfield}
            onChange={handleChange}
            value={newPassword}
            required
            />

          </div>

          <button type='submit' className={passwordcss.submits}>submit</button>

          {message && <p className={passwordcss.message}>{message}</p>}



        </form>
      </div>
    </section>
  </div>
  );
};

export default ChangePasswordForm;
