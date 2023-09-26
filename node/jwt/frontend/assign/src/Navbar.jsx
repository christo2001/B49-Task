import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Mentor from './Mentor';
import Student from './Student';
import './Navbar.css'
import Studentassign from './Studentsassign';
import Previousmentor from './Previousmentor';
import Getstudents from './Getstudents';
import Getpreviousmentor from './Getpreviousmentor';

function Navbar() {
  return (
    <div>
      <Router>
        <div>
          <nav id='navbar'>
            <ul>
              <li>
                <NavLink to='/' activeClassName='active-link' >
                  Mentor
                </NavLink>
              </li>
              <li>
                <NavLink to='/student' activeClassName='active-link'>
                  Student
                </NavLink>
              </li>
              <li>
                <NavLink to='/studentassign' activeClassName='active-link'>
                  Studentassign
                </NavLink>
              </li>
              <li>
                <NavLink to='/previousmentor' activeClassName='active-link'>
                  Assign new mentor
                </NavLink>
              </li>
              <li>
                <NavLink to='/getstudents' activeClassName='active-link'>
                  Getstudents
                </NavLink>
              </li>
              <li>
                <NavLink to='/getpreviousmentor' activeClassName='active-link'>
                  Getpreviousmentor
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Mentor />} />
            <Route path='/student' element={<Student />} />
            <Route path='/studentassign' element={<Studentassign />} />
            <Route path='/previousmentor' element={<Previousmentor/>} />
            <Route path='/getstudents' element={<Getstudents/>} />
            <Route path='/getpreviousmentor' element={<Getpreviousmentor/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Navbar;