import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import verifycss from './verify.module.css';

// ... (previous imports)

const Verification = ({ token }) => {
  const [verificationStatus, setVerificationStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`https://forget-password-2zs6.onrender.com/api/user/verify/${token}`);
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus(data.message || 'User successfully verified!');
        } else {
          setVerificationStatus(data.error || 'Verification failed.');
        }
      } catch (error) {
        console.error('Error during verification:', error);
        setVerificationStatus('An error occurred during verification.');
      }
    };

    verifyUser();
  }, [token, navigate]);

  return (
    <div className={verifycss.verifybox}>
      {verificationStatus ? (
        <>
          <p className={verifycss.verifymessage}>{verificationStatus}</p>
          {verificationStatus === 'User successfully verified!' && <Link to="/login" className={verifycss.verifybutton}>Go to Login</Link>}
        </>
      ) : (
        <>
        <p>verifying user....</p>
          <p className={verifycss.verifymessage}>{verificationStatus}</p>
          {verificationStatus === 'Verification failed' && <p>verification failed</p>}
        </>
      )}
    </div>
  );
};

export default Verification;
