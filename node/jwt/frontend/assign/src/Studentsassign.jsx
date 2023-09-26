import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssignMentor = () => {
  const [mentorId, setMentorId] = useState(''); // State to store mentorId
  const [students, setStudents] = useState([]); // State to store student IDs

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create an object with the data to send to the server
      const data = {
        students: students,
      };

      // Send a POST request to the server
      const response = await axios.post(`http://localhost:3000/mentor/${mentorId}/assign`, data);

      // Handle the response as needed
      console.log('Assignment successful:', response.data);
    } catch (error) {
      console.error('Error assigning mentor:', error);
    }
  };

  return (
    <div>
      <h2>Assign Mentor to Students</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mentorId">Mentor ID:</label>
          <input
            type="text"
            id="mentorId"
            value={mentorId}
            onChange={(e) => setMentorId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="studentIds">Student IDs</label>
          <input
            type="text"
            id="studentIds"
            value={students.join(',')}
            onChange={(e) => setStudents(e.target.value.split(','))}
            required
          />
        </div>
        <button type="submit">Assign Mentor</button>
      </form>
    </div>
  );
};

export default AssignMentor;
