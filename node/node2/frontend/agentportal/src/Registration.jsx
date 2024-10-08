import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Add custom CSS for additional styles

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
      await axios.post('https://hotelsapi-52kr.onrender.com/api/flat/adduser', entry);
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
    <div className="container d-flex flex-column align-items-center bg-light py-5">
      <div className="bg-white p-4 shadow rounded mb-5" style={{ maxWidth: '500px', width: '100%' }}>
        <h2 className="text-center mb-4">User Form</h2>
        <input
          type="text"
          className="form-control mb-3"
          name="fname"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          name="lname"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          required
        />
        <input
          type="email"
          className="form-control mb-3"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="text"
          className="form-control mb-3"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
          required
        />
        <button className="btn btn-primary w-100" onClick={setSubmit}>Submit</button>
        {error && <p className="text-danger mt-3">{error}</p>}
      </div>

      <div className="row w-100">
        {data.map((val, index) => (
          <div className="col-md-4 mb-4 d-flex justify-content-center" key={index}>
            <div className="card shadow-sm bg-white rounded w-100">
              <div className="card-body">
                <h5 className="card-title">{val.fname} {val.lname}</h5>
                <p className="card-text">Phone: {val.phone}</p>
                <p className="card-text">Email: {val.email}</p>
                <p className="card-text">Address: {val.address}</p>
                <button className="btn btn-secondary me-2" onClick={() => setEdit(index)}>Edit</button>
                <button className="btn btn-danger" onClick={() => setDelete(index)}>Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
