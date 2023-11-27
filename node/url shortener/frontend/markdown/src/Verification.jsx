import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import verifycss from './verify.module.css';

const Verification = ({ token }) => {
  const [verificationStatus, setVerificationStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/verify/${token}`);
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus(data.message || 'User successfully verified!');
        } else {
          setVerificationStatus(data.error || 'Verification failed.');
          navigate('/register');
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
        <p>Verifying user...</p>
      )}
    </div>
  );
};

export default Verification;
