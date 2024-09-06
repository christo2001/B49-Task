import React, { createContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Create the context
export const AuthContext = createContext();

// Create the AuthContext provider component
export const AuthProvider = ({ children }) => {
  const [agentInfo, setAgentInfo] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Login function
  const login = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3333/api/agent/log', formData);
      const { token } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
      setError('');
      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  // Register function
  const register = async (formData) => {
    try {
      const response = await axios.post('http://localhost:3333/api/agent/regi', formData);
      setError('');
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
    }
  };

  // Fetch agent profile
  const fetchProfile = async () => {
    if (!token) return;
    try {
      const res = await axios.get('http://localhost:3333/api/flat/agent/info', {
        headers: {
          'x-auth-token': token,
        },
      });
      setAgentInfo(res.data);
    } catch (err) {
      console.log(err.response?.data?.error || 'Error fetching profile');
    }
  };

  // Update agent profile
  const updateProfile = async (newName) => {
    if (!agentInfo) return;
    try {
      const res = await axios.put(
        `http://localhost:3333/api/flat/upd/agent/${agentInfo._id}`,
        { name: newName },
        {
          headers: {
            'x-auth-token': token,
          },
        }
      );
      setAgentInfo({ ...agentInfo, name: res.data.data.name });
    } catch (err) {
      console.log(err.response?.data?.error || 'Error updating username');
    }
  };

  return (
    <AuthContext.Provider value={{ agentInfo, login, register, fetchProfile, updateProfile, error }}>
      {children}
    </AuthContext.Provider>
  );
};
