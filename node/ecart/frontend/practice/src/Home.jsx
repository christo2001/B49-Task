import React, { useState } from 'react';

function Home() {
  const [data, setData] = useState([]); // State to store the list of entries
  const [name, setName] = useState(''); // State to track name input
  const [age, setAge] = useState(''); // State to track age input

  const setsubmit = () => {
    const entry = { name, age }; // Create an object with the name and age
    setData((prevData) => [...prevData, entry]); // Add the entry to the data array
    setName(''); // Clear the input fields
    setAge('');  // Clear the input fields
  };

  const setedit = (index) => {
    const selectedEntry = data[index]; // Get the selected entry by index
    setName(selectedEntry.name); // Populate the name input
    setAge(selectedEntry.age);   // Populate the age input
    // Remove the selected entry from the array
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData); // Update the state with the entry removed
  };

  const setdelete=(index)=>{
    
    const remove = data.filter((_,i)=> i!==index)
    setData(remove)
  }

  return (
    <div>
      <input
        type="text"
        name="name"
        value={name} // Controlled input with value
        onChange={(e) => setName(e.target.value)} // Update the name state
        placeholder="Name"
      />

      <input
        type="text"
        name="age"
        value={age} // Controlled input with value
        onChange={(e) => setAge(e.target.value)} // Update the age state
        placeholder="Age"
      />

      <button onClick={setsubmit}>Submit</button>

      <div>
        {data.map((val, index) => (
          <div key={index}>
            <p>{val.name}</p>
            <p>{val.age}</p>
            <button onClick={() => setedit(index)}>Edit</button> {/* Pass the index */}
            <button onClick={()=>setdelete(index)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
