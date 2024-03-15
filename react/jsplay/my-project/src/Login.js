import React, { useState } from 'react';

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('https://b49-task.onrender.com/a/log', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, email }),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token to localStorage
        localStorage.setItem('token', data.token);
        setMessage({ text: 'Login successful', type: 'success' });
      } else {
        setMessage({ text: data.message || 'Login failed', type: 'error' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage({ text: 'Login failed', type: 'error' });
    }
  };

  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-full md:w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>

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
          onClick={handleLogin}
        >
          LOG IN
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

        <a
          href="#"
          className="transform text-center font-semibold  duration-300 hover:text-gray-300"
        >
          FORGOT PASSWORD?
        </a>

        <p className="text-center text-lg">
          No account?
          <a
            href="#"
            className="font-medium text-indigo-500 underline-offset-4 hover:underline"
          >
            Create One
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;
