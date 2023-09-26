import React, { useState } from 'react';
import axios from 'axios';

function GetStudents() {
  const [mentorId, setMentorId] = useState('');
  const [students, setStudents] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3000/mentor/${mentorId}/students`);
      setStudents(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Internal Server Error');
    }
  };

  return (
    <div>
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
        <button type="submit">Get Students</button>
      </form>

      {error && <div className="error">{error}</div>}

      <div>
        <h2>Students:</h2>
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              {student.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default GetStudents;
