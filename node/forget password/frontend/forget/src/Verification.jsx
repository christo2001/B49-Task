import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import verifycss from './verify.module.css';

const Verification = ({ token }) => {
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Update the URL to include the token dynamically
        const response = await fetch(`http://localhost:3000/api/user/verify/${token}`);
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus(data.message || 'User successfully verified!');
        } else {
          setVerificationStatus(data.error || 'Verification failed.');
        }
      } catch (error) {
        // Display the actual error message from the server
        console.error('Error during verification:', error);
        setVerificationStatus(`An error occurred during verification: ${error.message}`);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    verifyUser();
  }, [token, navigate]);

  return (
    <div className={verifycss.verifybox}>
      {loading ? (
        <p>Verifying user....</p>
      ) : (
        <>
          <p className={verifycss.verifymessage}>{verificationStatus}</p>
          {verificationStatus && (
            <>
              {verificationStatus.includes('User successfully verified') && (
                <Link to="/login" className={verifycss.verifybutton}>
                  Go to Login
                </Link>
              )}
              {verificationStatus.includes('Verification failed') && <p>Verification failed</p>}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Verification;
