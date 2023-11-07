import React, { useState } from 'react';
import axios from 'axios';
import signupcss from './signup.module.css'
import img6 from "../images/image7.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock,faEnvelope} from "@fortawesome/free-solid-svg-icons";


function Signup() {
  const [signupformdata, setsignupformdata] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setmessage] = useState('');

  const handleChange = (e) => {
    setsignupformdata({ ...signupformdata, [e.target.name]: e.target.value }); // Corrected the function name to setformdata
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/user/registered', signupformdata);
      console.log("success")
    } catch (error) {
      console.error(error);

    }
  };

  return (
    <div>
      <div className={signupcss.signupcontainer}>
        <div className={signupcss.signupformscontainer}>
          <div className={signupcss.signupsigninsignup}>

            <form onSubmit={handleSubmit} className={signupcss.signupsigninform}>
              <h2 className={signupcss.signuptitle}>sign up</h2>

              
              <div className={signupcss.signupinputfield}>
              <FontAwesomeIcon icon={faUser} className={signupcss.signupicon}/>

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
              <FontAwesomeIcon icon={faEnvelope} className={signupcss.signupicon}/>

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
              <FontAwesomeIcon icon={faLock} className={signupcss.signupicon}/>
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

              <input type='submit' className={signupcss.signupbtnsolid}/>

          </form>

          </div>
        </div>


        <div className={signupcss.signuppanelscontainer}> 
          <div className={signupcss.signupleftpanel}>
            <div className={signupcss.signupcontent}>
              <h3>already have an account ?</h3>
              <p> feel free to login here </p>
              <button className={signupcss.signupbtntransparent}>login</button>
              <img src={img6} className={signupcss.signupimage}/>
            </div>

          </div>
        </div>


      </div>
    </div>
  );
}

export default Signup;
