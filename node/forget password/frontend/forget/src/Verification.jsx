import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const VerifyUser = () => {
  const { token } = useParams();
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/verify/${token}`);
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        console.log(error);
        setVerificationStatus('error');
      }
    };

    verifyUser();
  }, [token]);

  return (
    <div>
      {verificationStatus === 'success' && <p>Verification successful! You can now log in.</p>}
      {verificationStatus === 'error' && <p>Verification failed. Please try again.</p>}
      {verificationStatus === null && <p>Verifying...</p>}
    </div>
  );
};

export default VerifyUser;
