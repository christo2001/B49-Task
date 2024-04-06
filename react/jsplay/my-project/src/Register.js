import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Using useNavigate hook

  const handleRegistration = async () => {
    try {
      const response = await fetch('https://b49-task.onrender.com/a/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: data.message, type: 'success' });
      } else {
        setMessage({ text: data.message || 'Registration failed', type: 'error' });
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setMessage({ text: 'Registration failed', type: 'error' });
    }
    navigate("/login")
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-full md:w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Register</div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
          />
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
          />
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-none bg-transparent outline-none placeholder-italic focus:outline-none"
          />
        </div>

        <button
          className="transform rounded-sm text-white bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          onClick={handleRegistration}
        >
          REGISTER
        </button>

        {message && (
          <p
            className={`text-center ${
              message.type === 'success' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {message.text}
          </p>
        )}


        <p className="text-center text-lg">
          Already have an account?
          <a
            href="/login"
            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
          >
            Log In
          </a>
        </p>
      </section>
    </main>
  );
};

export default RegistrationForm;
