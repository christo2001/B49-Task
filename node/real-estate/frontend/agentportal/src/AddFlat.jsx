import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';

const AddFlat = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  const [agentInfo, setAgentInfo] = useState({
    name: "",
    email: "",
    age: "",
    dob: "",
    contact: "",
  });

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newDob, setNewDob] = useState("");
  const [newContact, setNewContact] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3333/api/flat/agent/info",
          {
            headers: {
              "x-auth-token": token,
            },
          }
        );
        setAgentInfo(res.data);
      } catch (error) {
        console.log(error.response?.data?.error || "Error fetching profile");
      }
    };
    fetchProfile();
  }, [token]);

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3333/api/flat/upd/agent/${agentInfo._id}`,
        { name: newName, age: newAge, dob: newDob, contact: newContact }, // Send the updated values
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      alert("Profile updated successfully");
      setAgentInfo({
        ...agentInfo,
        name: res.data.data.name,
        age: res.data.data.age,
        dob: res.data.data.dob,
        contact: res.data.data.contact,
      });
    } catch (error) {
      console.log(error.response?.data?.error || "Error updating profile");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Profile</h2>

      {/* Centered Logout Button */}
      <div className="d-flex justify-content-center mb-4">
        <button className="btn btn-danger" onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className="card p-4 shadow-sm">
        {/* Display Profile Information */}
        <div className="mb-3">
          <h5>Name:</h5>
          <p>{agentInfo.name}</p>
        </div>
        <div className="mb-3">
          <h5>Email:</h5>
          <p>{agentInfo.email}</p>
        </div>
        <div className="mb-3">
          <h5>Age:</h5>
          <p>{agentInfo.age}</p>
        </div>
        <div className="mb-3">
          <h5>Date of Birth:</h5>
          <p>{agentInfo.dob}</p>
        </div>
        <div className="mb-3">
          <h5>Contact:</h5>
          <p>{agentInfo.contact}</p>
        </div>

        {/* Input fields to update profile */}
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="newName" className="form-label">New Username</label>
            <input
              type="text"
              className="form-control"
              id="newName"
              placeholder="Enter new username"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="newAge" className="form-label">New Age</label>
            <input
              type="number"
              className="form-control"
              id="newAge"
              placeholder="Enter new age"
              value={newAge}
              onChange={(e) => setNewAge(e.target.value)}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor="newDob" className="form-label">New Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="newDob"
              value={newDob}
              onChange={(e) => setNewDob(e.target.value)}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="newContact" className="form-label">New Contact</label>
            <input
              type="text"
              className="form-control"
              id="newContact"
              placeholder="Enter new contact number"
              value={newContact}
              onChange={(e) => setNewContact(e.target.value)}
            />
          </div>
        </div>

        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={handleUpdate}
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFlat;
