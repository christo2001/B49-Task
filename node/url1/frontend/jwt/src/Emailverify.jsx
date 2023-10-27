import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Emailverify = () => {
  const { token } = useParams();
  const [verificationMessage, setVerificationMessage] = useState('');

  useEffect(() => {
    // Send a GET request to your backend to verify the token
    fetch(`/verify/${token}`)
      .then((response) => {
        if (response.status === 200) {
          setVerificationMessage('Email verified successfully');
        } else {
          setVerificationMessage('Email verification failed');
        }
      })
      .catch((error) => {
        console.error(error);
        setVerificationMessage('An error occurred during verification');
      });
  }, [token]);

  return (
    <div>
      <h2>Email Verification</h2>
      <p>Token: {token}</p>
      <p>{verificationMessage}</p>
    </div>
  );
};

export default Emailverify;

