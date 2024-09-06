import React, { useEffect, useState } from "react";
import axios from "axios";

const AddFlat = () => {
  const [agentInfo, setAgentInfo] = useState({
    name: "",
    email: "",
  });

  const [newName, setNewName] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3333/api/flat/agent/info", {
          headers: {
            "x-auth-token": token,
          },
        });
        setAgentInfo(res.data);
      } catch (error) {
        console.log(error.response.data.error);
      }
    };
    fetchProfile();
  }, [token]);

  const handleUpdate = async () => {
    try {
      const res = await axios.put(
        `http://localhost:3333/api/flat/upd/agent/${agentInfo._id}`,
        { name: newName },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      alert("Username updated successfully");
      setAgentInfo({ ...agentInfo, name: res.data.data.name });
    } catch (error) {
      console.log(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {agentInfo.name}</p>
      <p>Email: {agentInfo.email}</p>

      <input
        type="text"
        placeholder="New Username"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Username</button>
    </div>
  );
};

export default AddFlat;
