import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <div className="nav">
      <div className="menu">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/author">
          Author
        </NavLink>
        <NavLink to="/authorrecord">
          Author Record
        </NavLink>
        <NavLink to="/book">
          Book
        </NavLink>
        <NavLink to="/bookrecord">
          Book Record
        </NavLink>
      
      </div>
    </div>
  );
};

export default Navbar;
