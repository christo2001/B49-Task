import React, { useEffect, useState } from 'react';

const VerifyUser = ({ match }) => {
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/verify/${match.params.token}`);
        const data = await response.json();

        if (response.ok) {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
        }
      } catch (error) {
        console.error(error);
        setVerificationStatus('error');
      }
    };

    verifyUser();
  }, [match.params.token]);

  return (
    <div>
      {verificationStatus === 'success' && <p>Verification successful! You can now log in.</p>}
      {verificationStatus === 'error' && <p>Verification failed. Please try again.</p>}
      {verificationStatus === null && <p>Verifying...</p>}
    </div>
  );
};

export default VerifyUser;
