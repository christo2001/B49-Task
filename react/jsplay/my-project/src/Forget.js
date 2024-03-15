import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await fetch('https://b49-task.onrender.com/a/forgot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, newPassword }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: data.message, type: 'success' });
      } else {
        setMessage({ text: data.message || 'Password reset failed', type: 'error' });
      }
    } catch (error) {
      console.error('Error during password reset:', error);
      setMessage({ text: 'Password reset failed', type: 'error' });
    }
  };

  return (
    <div>
      <main
        className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
      >
        <section className="flex w-[30rem] flex-col space-y-10">
          <div className="text-center text-4xl font-medium">Change Password</div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
            <input
              type="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <button
            className="transform rounded-sm text-white bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
            onClick={handleResetPassword}
          >
            RESET PASSWORD
          </button>

          {message && (
            <p className={message.type === 'success' ? 'text-green-500' : 'text-red-500'}>
              {message.text}
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default ForgotPassword;
