import React, { useState } from 'react';
import axios from 'axios';

function Getpreviousmentor() {
  const [mentor, setMentor] = useState([]);
  const [studentId, setStudentId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3000/students/${studentId}/mentor`);
      setMentor(response.data); // Use response.data to set the mentor state
    } catch (error) {
      // Handle error appropriately, e.g., show an error message
      console.error(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>student Id</label>
        <input type='text' value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        <button type='submit'>Get Previous Mentor</button>
      </form>
      <h2>previousmentor:</h2>
      <ul>
          {mentor.map((pmentor) => (
            <li key={pmentor.id}>
              {pmentor.name}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Getpreviousmentor;
