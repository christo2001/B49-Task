import React, { useState } from 'react';
import axios from 'axios';
import img2 from '../images/image3.png';
import passwordcss from './password.module.css';
import { useParams,useNavigate } from 'react-router-dom';


function Password() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const { token } = useParams();

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setEmail(e.target.value);
    } else if (e.target.name === 'password') {
      setNewPassword(e.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`https://url-shorteners-t7h3.onrender.com/api/user/change/${token}`, {
        email: email,
        newpassword: newpassword,
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
                name='password'
                id='password'
                className={passwordcss.inputfield}
                onChange={handleChange}
                value={newpassword}
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
