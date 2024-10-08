import React, { useState } from 'react';
import axios from 'axios';

function Home() {
  const [data, setData] = useState([]);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const setSubmit = async () => {
    const entry = { fname, lname, phone, email, address };

    if (!/^\d+$/.test(entry.phone)) {
      setError('Phone Number must be a numeric value');
      return;
    }
    
    if (entry.phone.length !== 10) {
      setError('Phone Number must be exactly 10 digits');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entry.email)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      await axios.post('http://localhost:7000/api/flat/adduser', entry);
      setData((prevData) => [...prevData, entry]);
      setFname('');
      setLname('');
      setPhone('');
      setEmail('');
      setAddress('');
      setError('');
    } catch (error) {
      console.error(error);
      setError('Failed to add user: ' + error.message);
    }
  };

  const setEdit = (index) => {
    const selectedEntry = data[index];
    setFname(selectedEntry.fname);
    setLname(selectedEntry.lname);
    setPhone(selectedEntry.phone);
    setEmail(selectedEntry.email);
    setAddress(selectedEntry.address);
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const setDelete = (index) => {
    const remove = data.filter((_, i) => i !== index);
    setData(remove);
  };

  return (
    <div>
      <input
        type="text"
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        name="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        name="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="text"
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Address"
        required
      />
      <button onClick={setSubmit}>Submit</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        {data.map((val, index) => (
          <div key={index}>
            <p>{val.fname}</p>
            <p>{val.lname}</p>
            <p>{val.phone}</p>
            <p>{val.email}</p>
            <p>{val.address}</p>
            <button onClick={() => setEdit(index)}>Edit</button>
            <button onClick={() => setDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
