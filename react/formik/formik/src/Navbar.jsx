import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav">
        <div className="menu">
            <Link to='/'> home</Link>
            <Link to='/cart'> cart</Link>
        </div>
    </div>
  )
}

export default Navbar