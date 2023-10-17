import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to='/home'>home</Link>
        </li>
        <li>
          <Link to='/myurl'>myurl</Link>
        </li>
        <li>
          <Link to='/dashboard'>dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
