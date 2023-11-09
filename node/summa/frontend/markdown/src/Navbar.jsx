import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
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




function Navbar() {
  const user = localStorage.getItem("token");
  return (
    <div>
      <Router>
        <div>
          <nav id='navbar'>
            <ul>
              <li>
                <NavLink to='/' activeClassName='active-link'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/api/user/verify' activeClassName='active-link'>
                  Verify
                </NavLink>
              </li>
              <li>
                <NavLink to='/login' activeClassName='active-link'>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to='/forget' activeClassName='active-link'>
                  Forget
                </NavLink>
              </li>
              <li>
                <NavLink to='/otp' activeClassName='active-link'>
                  OTP Verify
                </NavLink>
              </li>
              <li>
                <NavLink to='/change' activeClassName='active-link'>
                  Change
                </NavLink>
              </li>
              <li>
                <NavLink to='/mark' activeClassName='active-link'>
                  Mark
                </NavLink>
              </li>
              <li>
                <NavLink to='/markhome' activeClassName='active-link'>
                  markhome
                </NavLink>
              </li>
              <li>
                <NavLink to='/advantage' activeClassName='active-link'>
                  advantage
                </NavLink>
              </li>
              <li>
                <NavLink to='/aboutus' activeClassName='active-link'>
                  about us
                </NavLink>
              </li>
              <li>
                <NavLink to='/chart' activeClassName='active-link'>
                  chart
                </NavLink>
              </li>
              <li>
                <NavLink to='/about' activeClassName='active-link'>
                  about
                </NavLink>
              </li>
              <li>
                <NavLink to='/nav' activeClassName='active-link'>
                  nav
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/api/user/verify' element={<Verification token={user} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/forget' element={<Forget />} />
            <Route path='/otp' element={<Otp />} />
            <Route path='/change' element={<Password />} />
            <Route path='/mark' element={<Markdown />} />
            <Route path='/markhome' element={<Markhome />} />
            <Route path='/advantage' element={<Advantage />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/chart' element={<Barchart/>} />
            <Route path='/about' element={<Aboutus/>} />
            <Route path='/nav' element={<Nav/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Navbar;
