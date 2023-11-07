import React, { useState } from 'react';
import axios from 'axios';
import logincss from './login.module.css'
import img3 from "../images/image3.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope,faLock} from "@fortawesome/free-solid-svg-icons";
function Login() {
  const [formdata, setformdata] = useState({
    username: '',
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
      if (response.status === 201) {
        const token = response.data.token; // Assuming the token is in the response data
        
        // Save the token in local storage
      localStorage.setItem('token', token);
      console.log("success")
      }
    } catch (error) {
      console.error(error);

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

          </div>
        </div>


        <div className={logincss.loginpanelscontainer}> 
          <div className={logincss.loginleftpanel}>
            <div className={logincss.logincontent}>
              <h3>want to create a new  account ?</h3>
              <p> feel free to register here </p>
              <button className={logincss.loginbtntransparent}>register</button>
              <img src={img3} className={logincss.loginimage}/>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Login;
