// Verification.js
import React, { useState, useEffect } from 'react';
import verify from "../images/verified.png"
import notverify from "../images/notverified.jpg"
import verifycss from "./verify.module.css"
import { Link } from 'react-router-dom';


const Verification = ({ token }) => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (token) {
      // Send a GET request to the Express route for user activation
      fetch(`http://localhost:3000/api/user/verify/${token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            setMessage(data.message);
          } else if (data.error) {
            setError(data.error);
          }
        })
        .catch((error) => {
          console.error(error);
          setError('Internal error');
        });
    } else {
      setError('Token is missing');
    }
  }, [token]);

  return (
    <div className={verifycss.verifybody}>

      {/* success message */}
  {message && (
    <div className={verifycss.verifybox}>
      <p className={verifycss.verifymessage}>{message}</p>
      <img src={verify} className={verifycss.verifyimage}  alt="Verification" />
      <p className={verifycss.verifyp}> thank you, your email has been verified. your account is now active.</p>
      <p className={verifycss.verifyp}> please use the link below to login to your account</p>
      <button className={verifycss.verifybutton}>
      <Link to="/login" className={verifycss.verifylogin}>Login</Link>
      </button>
      
    </div>
  )}

   {/* failure message */}
  {error &&(
    <div className={verifycss.verifybox}>
    <img src={notverify} className={verifycss.verifyimage}  alt="Verification" />
    <p className={verifycss.verifymessage}>{error}</p>
    <p className={verifycss.verifyp}> please use the link below to resent the conformation mail to your gmail account</p>
    <button className={verifycss.verifybutton}>Resend</button>
    
  </div>
  )}
</div>

  );
  
};

export default Verification;
