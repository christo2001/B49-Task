import React from 'react';
import { useNavigate } from 'react-router-dom';
import doc1 from "./images/doc1.png";
import logo from "./images/logo.png";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/login");
  };

  return (
    <div className="flex justify-center">
      <div className="relative shadow w-full">
        <div className="backdrop-blur-sm bg-gradient-to-r from-blue-400 to-purple-500">
          <div className="relative z-1 h-16 mx-auto px-5 max-w-7xl flex items-center justify-between text-white">
            <a className="text-2xl hover:text-cyan-400 transition-colors" href="#">
              <img
                className="object-cover h-16 w-auto rounded-lg shadow-lg sm:h-20 sm:w-auto xl:h-24 xl:w-auto bg-white"
                src={logo}
                alt=""
              />
            </a>
            <ul className="flex items-center gap-5 mr-11">
              <li><a className="hover:text-cyan-400 transition-colors" href="/myappointment">My Appointment</a></li>
              <button 
                className="px-4 py-2 rounded-md border border-gray-300 shadow-sm bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                onClick={handleLogout}
              >
                Log out
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
