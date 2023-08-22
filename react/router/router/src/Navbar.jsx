import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Full from './Full';
import Data from './Data';
import Cyber from './Cyber';
import Career from './Career';
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <Router>
        <div>
          <nav id='navbar'>
            <ul>
              <li>
                <NavLink to='/' activeClassName='active-link' exact>
                  All
                </NavLink>
              </li>
              <li>
                <NavLink to='/cyber' activeClassName='active-link'>
                  Cyber Security
                </NavLink>
              </li>
              <li>
                <NavLink to='/full' activeClassName='active-link'>
                  Full Stack Development
                </NavLink>
              </li>
              <li>
                <NavLink to='/data' activeClassName='active-link'>
                  Data Science
                </NavLink>
              </li>
          
              <li>
                <NavLink to='/career' activeClassName='active-link'>
                  Career
                </NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/full' element={<Full />} />
            <Route path='/data' element={<Data />} />
            <Route path='/cyber' element={<Cyber />} />
            <Route path='/career' element={<Career />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Navbar;
