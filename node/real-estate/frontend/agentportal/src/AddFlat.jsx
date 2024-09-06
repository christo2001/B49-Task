import React, { useEffect, useState } from "react";
import axios from "axios";

const AddFlat = () => {
  const [agentInfo, setAgentInfo] = useState({
    name: "",
    email: "",
    age: "",
  });

  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3333/api/flat/agent/info", {
          headers: {
            "x-auth-token": token,
          },
        });
        console.log(res.data); // Check if age is returned in the response
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
        { name: newName, age: newAge }, // Correctly send both name and age in the request
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      alert("Profile updated successfully");
      setAgentInfo({ ...agentInfo, name: res.data.data.name, age: res.data.data.age }); // Update both name and age
    } catch (error) {
      console.log(error.response?.data?.error || 'Error updating profile');
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {agentInfo.name}</p>
      <p>Email: {agentInfo.email}</p>
      <p>Age: {agentInfo.age}</p>

      <input
        type="text"
        placeholder="New Username"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />

      <input
        type="number"
        placeholder="New Age"
        value={newAge}
        onChange={(e) => setNewAge(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
};

export default AddFlat;
