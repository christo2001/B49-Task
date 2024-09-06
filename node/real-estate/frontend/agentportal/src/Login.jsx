import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,NavLink } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3333/api/agent/log', formData);
            const { token } = response.data;
            localStorage.setItem('token', token); // Store the token in localStorage
            setMessage('Login successful!');
            navigate("/home");
            setError('');
        } catch (err) {
            setMessage('');
            setError(err.response?.data?.error || 'Something went wrong');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Login;
