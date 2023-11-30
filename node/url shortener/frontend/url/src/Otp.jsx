import React, { useState } from 'react';
import axios from 'axios';
import otpcss from './otp.module.css';

function VerifyOTP() {
  const [email, setEmail] = useState('');
  const [otpFields, setOtpFields] = useState(['', '', '', '']); // An array to store OTP values
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  

  const handleVerifyOTP = async (e) => {
    e.preventDefault(); // Corrected typo
  
    try {
      const response = await axios.post('http://localhost:3000/api/user/verifyotp', {
        email,
        otp: otpFields.join(''), // Join the OTP fields into a single string
      });
  
      if (response.status === 200) {
        setMessage(response.data.message);
      } else {
        setError(response.data.error);
      }
    } catch (error) {
      setMessage('An error occurred while verifying OTP');
    }
  };
  

  // Function to update OTP field at a specific index
  const updateOtpField = (index, value) => {
    if (index >= 0 && index < 4) {
      const newOtpFields = [...otpFields];
      newOtpFields[index] = value;
      setOtpFields(newOtpFields);
    }
  };

  return (
    <div>
    <div className={otpcss.body}>
      <form onSubmit={handleVerifyOTP} className={otpcss.forgetpassowrd}>

        <div className={otpcss.head}>
          <h2>enter your registered email </h2>
        </div>

        <div className={otpcss.emailinputbox}>

        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          value={email} // Change 'email.email' to 'email'
          required
        />
         <span>email</span>
         </div>

         

         <div className={otpcss.inputbox}>
          <div className={otpcss.otpbox}>
            {otpFields.map((value, index) => (
              <input
                key={index}
                type="text"
                value={otpFields[index]}
                onChange={(e) => updateOtpField(index, e.target.value)}
                maxLength={1}
                required
              />
            ))}
          </div>
        </div>



        <button className={otpcss.forgetbutton}>verify</button>
      </form>

      {message && <p className={otpcss.message}>{message}</p>}


    </div>
  </div>
  );
}

export default VerifyOTP;
