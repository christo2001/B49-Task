import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import Register from "./Register"
import Login from './Login';
import Forget from './Forget';
import Password from './Password';
import Urlhome from './Urlhome';
import Verification from './Verification';
import Home from './Urlhome';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/change' element={<Password />} />
        <Route path='/urlhome' element={<Urlhome />} />
        <Route path='api/user/verify/:token' element={<Verification/>}/>
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
