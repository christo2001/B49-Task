import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import Register from "./Register"
import Login from './Login';
import Forget from './Forget';
import Password from './Password';
import Urlhome from './Urlhome';



function App() {
  const userToken = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/change/:token' element={<Password />} />
        <Route path='/urlhome' element={<Urlhome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
