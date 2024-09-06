// RegistrationForm.js
import React, { useState } from 'react';
import { useNavigate,NavLink } from 'react-router-dom'; // Import useNavigate from react-router-dom
import axios from 'axios';

const Registration = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        age:'',
        dob:'',
        contact:''
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
            const response = await axios.post('http://localhost:3333/api/agent/regi', formData);
            setMessage(response.data.message);
            navigate("/login");
            setError('');
        } catch (err) {
            setMessage('');
            setError(err.response.data.error || 'Something went wrong');
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </div>

                <div>
                    <label>age</label>
                    <input type='number' name="age" value={formData.age}  onChange={handleChange} required />
                </div>

                <div>
                    <label>dob</label>
                    <input type='date' name="dob" value={formData.dob}  onChange={handleChange} required />
                </div>

                <div>
                    <label>contact</label>
                    <input type='number' name="contact" value={formData.contact}  onChange={handleChange} required />
                </div>
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
            {error && <p>{error}</p>}
        </div>
    );
};

export default Registration;
