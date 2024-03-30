import React, { useState } from "react";
import axios from "axios";

const Changepassword = () => {
  const [email, setEmail] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email || !newpassword) {
      setError("Email and new password are required");
      return;
    }

    try {
      const response = await axios.post("http://localhost:7000/api/customer/changepassword", {
        email: email,
        newpassword: newpassword,
      });
      setSuccessMessage(response.data.message);
      setError("");
      setEmail("");
      setnewpassword("");
    } catch (error) {
      setError(error.response.data.error || "Failed to change password");
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-full md:w-[30rem] flex-col space-y-10 p-5  rounded-lg">
        <div className="text-center text-4xl font-medium">Change Password</div>

        {error && <p className="text-red-500">{error}</p>}
        {successMessage && <p className="text-green-500">{successMessage}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-gray-400 focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="New Password"
            value={newpassword}
            onChange={(e) => setnewpassword(e.target.value)}
            className="w-full border-b-2 bg-transparent text-lg outline-none placeholder-gray-400 focus:border-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-2 font-bold rounded-lg transition duration-300 hover:bg-indigo-500"
          >
            Change Password
          </button>
        </form>
      </section>
    </main>
  );
};

export default Changepassword;
