import React, { useState } from 'react'
import axios from 'axios'


const Mentor = () => {
    const [formData, setFormData] = useState({
        name: ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/mentors', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }
  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>mentor name:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                    required
                ></input>
            </div>
            <button type="submit">Register</button>
        </form>
    </div>
  )
}

export default Mentor