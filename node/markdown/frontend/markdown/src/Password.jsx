import React, { useState } from 'react';
import axios from 'axios';
import img2 from '../images/image3.png';
import passwordcss from './password.module.css';
import { useParams } from 'react-router-dom';

function Password() {
  const [email, setEmail] = useState('');
  const [newpassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);
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
      const response = await axios.post(`https://url-short-3gtm.onrender.com/api/user/change/${token}`, {
        email: email,
        newpassword: newpassword,
      });
      console.log("Success:", response.data);
      // Add any further actions upon success if needed
    } catch (error) {
      console.error("Error:", error);
      setError(error.response?.data?.message || "An error occurred");
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

          {error && <div className={passwordcss.error}>{error}</div>}

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
          </form>
        </div>
      </section>
    </div>
  );
}

export default Password;
