import React, { useState } from 'react';
import axios from 'axios';
import logincss from './login.module.css'
import img3 from "../images/image3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faLock} from "@fortawesome/free-solid-svg-icons";
import { useNavigate,Link  } from 'react-router-dom';


function Login() {
  const navigate = useNavigate()
  const [formdata, setformdata] = useState({
    email: '',
    password: '',
  });
  const [message, setmessage] = useState('');

  const handleChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value }); // Corrected the function name to setformdata
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3000/api/user/login', formdata);
      const token = response.data.token;
  
      // Store the token in localStorage
      localStorage.setItem('token', token);
      console.log('token');
      navigate('/markhome')
    } catch (error) {
      console.error(error);
  
      if (error.response) {
        const serverError = error.response.data.error;
  
        if (serverError) {
          // Server provided an error message
          setmessage(serverError);
        } else {
          // Server response structure is unexpected, provide a fallback message
          setmessage('An unknown error occurred.');
        }
      } else if (error.request) {
        // The request was made but no response was received
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
    }
  };
  
  
  
  

  return (
    <div>
    <div className={logincss.logincontainer}>
      <div className={logincss.loginformscontainer}>
        <div className={logincss.loginsigninsignup}>
          <form onSubmit={handleSubmit} className={logincss.loginsigninform}>
            <h2 className={logincss.logintitle}>log in</h2>

            <div className={logincss.logininputfield}>
              <FontAwesomeIcon icon={faEnvelope} className={logincss.loginicon}/>
              <input
                type='email'
                id='email'
                name='email'
                onChange={handleChange}
                value={formdata.email}
                placeholder='email'
                required
              />
            </div>

            <div className={logincss.logininputfield}>
              <FontAwesomeIcon icon={faLock} className={logincss.loginicon}/>
              <input
                type='password'
                id='password'
                name='password'
                onChange={handleChange}
                value={formdata.password}
                placeholder='password'
                required
              />
            </div>

            <input type='submit' className={logincss.loginbtnsolid}/>
          </form>

          {console.log('Rendering error message block:', message)}
          {message && <p style={{ color: 'red', textAlign:'center' }}>{message}</p>}
        </div>
      </div>

      <div className={logincss.loginpanelscontainer}> 
        <div className={logincss.loginleftpanel}>
          <div className={logincss.logincontent}>
            <h3>want to create a new  account ?</h3>
            <p> feel free to register here </p>
            <button className={logincss.loginbtntransparent}>
            <Link to="/" className={logincss.loginbtn}>register</Link>
            </button>
            <img src={img3} className={logincss.loginimage}/>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Login;
