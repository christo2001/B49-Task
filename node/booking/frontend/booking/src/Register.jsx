import React, { useState,useEffect } from 'react';
import { useNavigate,NavLink } from 'react-router-dom'; // Import useNavigate from react-router-dom
import register from "./images/register.png";
import GridLoader from "react-spinners/GridLoader";

function Register() {
  const navigate = useNavigate(); // Get the navigate function using useNavigate
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https://b49-task-1.onrender.com/api/patient/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Registration successful
        setSuccessMessage(data.message);
        setErrorMessage('');
        // Save token to local storage
        localStorage.setItem('token', data.token);
        navigate("/login"); // Navigate only if registration is successful
      } else {
        // Registration failed
        setSuccessMessage('');
        if (response.status === 409) {
          // Email already exists
          setErrorMessage("Email already exists. Please use a different email.");
        } else {
          // Other errors
          setErrorMessage(data.error || 'Registration failed');
        }
      }
    } catch (error) {
      console.error('Error occurred:', error);
      // Handle error
      setErrorMessage('Internal server error');
    }
  };
  
  return (
    <div >
{loading ? (
  <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black' }}>
    <GridLoader
      color="white" // Change color to blue
      loading={loading}
      size={20} // Adjust the size as needed
    />
  </div>
) : (



      <div>
        <div className=" relative">
          <div className="absolute top-0 -right-1 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
          <div className="absolute top-60 -left-4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 -right-1 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-0 mr-auto mb-0 ml-auto max-w-7xl xl:px-5 lg:flex-row">
            <div className="flex flex-col items-center w-full pt-5 pr-10 pb-20 pl-10 lg:pt-20 lg:flex-row">
              <div className="w-full bg-cover relative max-w-md lg:max-w-2xl lg:w-7/12">
                <div className="flex flex-col items-center justify-center w-full h-full relative lg:pr-10">
                  <img src={register} className="btn-" alt="Run Health"/>
                </div>
              </div>
              <div className="w-full mt-20 mr-0 mb-0 ml-0 relative z-10 max-w-2xl lg:mt-0 lg:w-5/12">
                <div className="flex flex-col items-start justify-start pt-10 pr-10 pb-10 pl-10  rounded-xl relative z-10">
                  <p className="w-full text-4xl font-medium text-center leading-snug font-serif">Sign up for an account</p>
         
                  <form onSubmit={handleSubmit} className="w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8">
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Username</p>
                      <input name="username" value={formData.username} onChange={handleChange} placeholder="John" type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"/>
                    </div>
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Email</p>
                      <input name="email" value={formData.email} onChange={handleChange} placeholder="123@ex.com" type="text" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"/>
                    </div>
                    <div className="relative">
                      <p className="bg-white pt-0 pr-2 pb-0 pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 absolute">Password</p>
                      <input name="password" value={formData.password} onChange={handleChange} placeholder="Password" type="password" className="border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mt-2 mr-0 mb-0 ml-0 text-base block bg-white border-gray-300 rounded-md"/>
                    </div>
                    <div className="relative">
                      <button type="submit" className="w-full inline-block pt-4 pr-5 pb-4 pl-5 text-xl font-medium text-center text-white bg-indigo-500 rounded-lg transition duration-200 hover:bg-indigo-600 ease">Submit</button>
                    </div>

                    {successMessage && <p className="text-green-500">{successMessage}</p>}
                    {errorMessage && <p className="text-red-500">{errorMessage}</p>}

                    <p className="text-center text-lg" style={{ marginTop: '20px' }}>
  Already have an account ?
  <NavLink to='/login' className="font-medium text-indigo-500 underline-offset-4 hover:underline">
    Login
  </NavLink>
</p>
                  </form>
                </div>
              
              </div>
            </div>
          </div>
          
    </div>
    </div>

    
      )}


    </div>
  );
}

export default Register;
