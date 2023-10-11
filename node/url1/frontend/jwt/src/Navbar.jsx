import React from 'react'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
         <nav>
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
      </nav>
    </div>
  )
}

export default Navbar