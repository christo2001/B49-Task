import React, { useState } from 'react';
import axios from 'axios'

function CreateMentor() {
  const [mentorData, setMentorData] = useState({
    name: ''
    // Add other mentor properties as needed
  });

  const handleChange = (e) => {
    setMentorData({ ...mentorData, [e.target.name]: e.target.value });
}


 const handleSubmit = async (e)=>{
  e.preventDefault();

  try{
    const response = await axios.post('http://localhost:3000/mentor',mentorData)
    console.log(response.data)
  }catch(error){
    console.log(error)
  }
 }


  return (
    <div>
      <h2>Create a New Mentor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={mentorData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* Add input fields for other mentor properties here */}
        <div>
          <button type="submit">Create Mentor</button>
        </div>
      </form>
    </div>
  );
}

export default CreateMentor;
