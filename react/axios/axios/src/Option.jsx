import { useState } from "react";
import React from 'react'


function Option() {
    const [gender, setGender] = useState('');

    const handleChange = (event) => {
      setGender(event.target.value);
    };
  return (
    <div>
         <label>
        <input 
          type="radio" 
          name="gender"
          value="Male" 
          onChange={handleChange} 
        />
        Male
      </label>
      <label>
        <input 
          type="radio" 
          name="gender"
          value="Female"  
          onChange={handleChange} 
        />
        Female
      </label>
      <h2>{gender}</h2>
    </div>
  )
}

export default Option