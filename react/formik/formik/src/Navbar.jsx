import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


const Navbar = () => {
  return (
    <div className="nav">
      <div className="menu">
        <NavLink exact to="/" activeClassName="active-link">
          Home
        </NavLink>
        <NavLink to="/author" activeClassName="active-link">
          Author
        </NavLink>
        <NavLink to="/authorrecord" activeClassName="active-link">
          Author Record
        </NavLink>
        <NavLink to="/book" activeClassName="active-link">
          Book
        </NavLink>
        <NavLink to="/bookrecord" activeClassName="active-link">
          Book Record
        </NavLink>
      
      </div>
    </div>
  );
};

export default Navbar;
