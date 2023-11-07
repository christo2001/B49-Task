// Verification.js

import React, { useState, useEffect } from 'react';
import verify from "../images/verified.png"
import notverify from "../images/notverified.jpg"
import verifycss from "./verify.module.css"


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
  {message && (
    <div className={verifycss.verifybox}>
      <img src={verify} className={verifycss.verifyimage}  alt="Verification" />
      <p className={verifycss.verifymessage}>{message}</p>
      <button className={verifycss.verifybutton}> # LOG IN</button>
      
    </div>
  )}
  {error &&(
    <div>
      <img src={notverify} className={verifycss.verifyimage}  alt="Verification" />
      <p style={{ color: 'red', 'font-size': 'larger' }}>{error}</p>
    </div>
  )}
</div>

  );
  
};

export default Verification;
