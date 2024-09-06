import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

const AddFlat = () => {
  const { agentInfo, fetchProfile, updateProfile } = useContext(AuthContext);
  const [newName, setNewName] = useState('');

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleUpdate = () => {
    updateProfile(newName);
  };

  return (
    <div>
      <h2>Profile</h2>
      {agentInfo && (
        <>
          <p>Name: {agentInfo.name}</p>
          <p>Email: {agentInfo.email}</p>
          <input
            type="text"
            placeholder="New Username"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <button onClick={handleUpdate}>Update Username</button>
        </>
      )}
    </div>
  );
};

export default AddFlat;
