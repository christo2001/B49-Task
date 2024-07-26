import React, { useState } from 'react';
import Jsx from './Jsx';
import Animal from './Animal';


function UserInfo() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    city: ''
  });
  const [submittedData, setSubmittedData] = useState([]);

 
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      name: '',
      age: '',
      city: ''
    });
  };

  const handleDelete = (index) => {
    const newData = [...submittedData];
    newData.splice(index, 1);
    setSubmittedData(newData);
  };

  const handleEdit = (index) => {
    // Set the form data to the data at the specified index
    setFormData(submittedData[index]);
    // Remove the edited data from the submittedData array
    const newData = [...submittedData];
    newData.splice(index, 1);
    setSubmittedData(newData);
  };

  return (
    <div>
      <h2>User Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text"  name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}  required />

        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age}  onChange={(e)=>(setFormData({...formData,age:e.target.value}))} required />
        </label>
        <br />
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={(e)=>(setFormData({...formData,city:e.target.value}))} required />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {submittedData.map((data, index) => (
        <div key={index}>
          <h3>Submitted Data {index + 1}:</h3>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          <p>City: {data.city}</p>
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleEdit(index)}>Edit</button>
        </div>
      ))}
      <Jsx/>
      <Animal/>
    </div>
  );
}

export default UserInfo;
