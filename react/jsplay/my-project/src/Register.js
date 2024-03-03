import React, { useState } from 'react';


function Register() {
  const [signupformdata, setsignupformdata] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [message, setmessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setsignupformdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://b49-task.onrender.com/a/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupformdata),
      });
  
      if (!response.ok) {
        const errorMessage = await response.json();
        throw new Error(errorMessage.message || 'An error occurred');
      }
  
      const responseData = await response.json();
      setmessage("Registration successful. An email has been sent to your registered email address.");
      // Handle responseData if needed
    } catch (error) {
      console.error('Error:', error);
      setmessage(error.message || 'An error occurred');
    }
  };

  return (
    <div>
      <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Log In</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="text"
              name="username"
              value={signupformdata.username}
              onChange={handleInputChange}
              placeholder="Username"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="email"
              name="email"
              value={signupformdata.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              name="password"
              value={signupformdata.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
          >
            LOG IN
          </button>

          <a
            href="#"
            className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
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
    </div>
  );
}

export default Register;
