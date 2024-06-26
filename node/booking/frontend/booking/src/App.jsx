import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './Register'
import Home from './Home'
import Service from './Service'
import Proud from './Proud'
import Login from './Login'
import Myappointment from './Myappointment';
import Changepassword from './Changepassword';

function App() {


  const handleSelectDoctor = (doctorName) => {
    setSelectedDoctorName(doctorName);
  };

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/myappointment" element={<Myappointment/>} />
          <Route path="/changepassword" element={<Changepassword/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
