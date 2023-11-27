import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Forget from './Forget';
import Otp from './Otp';
import Password from './Password';
import Markdown from './Markdown';
import Verification from './Verification';
import Markhome from './Markhome';
import Advantage from './Advantage';
import Aboutus from './Aboutus';
import Barchart from './componenets/Barchart';
import Nav from './Nav';
import Cheatsheet from './Cheatsheet';

function App() {
  const userToken = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forget' element={<Forget />} />
        <Route path='/otp' element={<Otp />} />
        <Route path='/change/:token' element={<Password />} />
        <Route path='/mark' element={<Markdown />} />
        <Route path='/markhome' element={<Markhome />} />
        <Route path='/advantage' element={<Advantage />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/chart' element={<Barchart />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/nav' element={<Nav />} />
        <Route
          path='/verify/:token'
          element={<Verification token={userToken} />} // Pass the token as a prop
        />
        <Route path='/cheatsheet' element={<Cheatsheet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
