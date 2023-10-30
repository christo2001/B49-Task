import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import Login from './Login';

function Navbar() {
  return (
    <div>
    <Router>
      <div>
        <nav id='navbar'>
          <ul>
            <li>
              <NavLink to='/' activeClassName='active-link' >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' activeClassName='active-link'>
                Login
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
  </div>
  )
}

export default Navbar