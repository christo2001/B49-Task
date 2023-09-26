import React, { useState } from 'react';
import axios from 'axios';
import './form.css'

function Previousmentor() {
  const [studentId, setStudentId] = useState("");
  const [mentorId, setMentorId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make an HTTP PUT request with the studentId and mentorId
      const response = await axios.put(`http://localhost:3000/student/${studentId}/assignmentor/${mentorId}`, {});

      console.log('Assignment successful:', response.data);
    } catch (error) {
      console.error('Error assigning mentor:', error);
    }
  }

  return (
    <>
    <h2>Assign new mentor</h2>
    <form onSubmit={handleSubmit}>
        
      <label>studentid</label>
      <input value={studentId} type='text' onChange={(e) => setStudentId(e.target.value)} />

      <label>mentorid</label>
      <input value={mentorId} type='text' onChange={(e) => setMentorId(e.target.value)} />

      <button type="submit">Assign Mentor</button>
    </form>
    </>
  )
}

export default Previousmentor;
