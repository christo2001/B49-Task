import React, { useEffect, useState } from 'react';

const Verification = ({ token }) => {
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/user/verify/${token}`);
        const data = await response.json(); // Assuming your server returns JSON

        if (response.ok) {
          // Assuming the server response includes a message property for success
          setVerificationStatus(data.message || 'User successfully verified!');
        } else {
          // Assuming the server response includes an error property for failure
          setVerificationStatus(data.error || 'Verification failed.');
        }
      } catch (error) {
        console.error('Error during verification:', error);
        setVerificationStatus('An error occurred during verification.');
      }
    };

    verifyUser();
  }, [token]);

  return (
    <div>
      {verificationStatus ? (
        <p>{verificationStatus}</p>
      ) : (
        <p>Verifying user...</p>
      )}
    </div>
  );
};

export default Verification;
