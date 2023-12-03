import React, { useState,useEffect } from 'react';
import axios from 'axios';
import signupcss from './signup.module.css';
import img6 from "../images/image7.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function Signup() {

  //register page code
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const [signupformdata, setsignupformdata] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setmessage] = useState(''); // State for displaying a message

  const handleChange = (e) => {
    setsignupformdata({ ...signupformdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://forget-password-2zs6.onrender.com/api/user/registration', signupformdata);
      const token = response.data.token;

      // Store the token in localStorage
      localStorage.setItem('token', token);

      setmessage("Registration successful"); // Set success message
      // Navigate to the login page after 1 second
      setTimeout(() => {
        navigate('/login'); // Redirect to the login page
      }, 1000);
    } catch (error) {
      const errorMessage = error.response ? error.response.data.error : 'An error occurred';
      setmessage(errorMessage); // Set error message
    }
    
  };

  return (

    <div className={signupcss.pageContainer}>
      <div className={signupcss.signupcontainer}>
        <div className={signupcss.signupformscontainer}>
          <div className={signupcss.signupsigninsignup}>
            <form onSubmit={handleSubmit} className={signupcss.signupsigninform}>
              <h2 className={signupcss.signuptitle}>sign up</h2>

              <div className={signupcss.signupinputfield}>
                <FontAwesomeIcon icon={faUser} className={signupcss.signupicon} />
                <input
                  type='text'
                  id='username'
                  name='username'
                  onChange={handleChange}
                  value={signupformdata.username}
                  placeholder='username'
                  required
                />
              </div>

              <div className={signupcss.signupinputfield}>
                <FontAwesomeIcon icon={faEnvelope} className={signupcss.signupicon} />
                <input
                  type='email'
                  id='email'
                  name='email'
                  onChange={handleChange}
                  value={signupformdata.email}
                  placeholder='email'
                  required
                />
              </div>

              <div className={signupcss.signupinputfield}>
                <FontAwesomeIcon icon={faLock} className={signupcss.signupicon} />
                <input
                  type='password'
                  id='password'
                  name='password'
                  onChange={handleChange}
                  value={signupformdata.password}
                  placeholder='password'
                  required
                />
              </div>

              <input type='submit' className={signupcss.signupbtnsolid} />
              {message && <p style={{ color: 'red' }}>{message}</p>} {/* Display the message */}

            </form>
          </div>
        </div>


        {/* leftpanel */}


        <div className={signupcss.signuppanelscontainer}>
          <div className={signupcss.signupleftpanel}>
            <div className={signupcss.signupcontent}>
              <h3>already have an account ?</h3>
              <p> feel free to login here </p>
              <button className={signupcss.signupbtntransparent}>
                <Link to="/login" className={signupcss.btn}>Login</Link>
              </button>
              <img src={img6} className={signupcss.signupimage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;