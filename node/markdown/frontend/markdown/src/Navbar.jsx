import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import navbarcss from './navbar.module.css';


function Navbar() {
  const navigate = useNavigate()
  const [menuopen,setmenuopen]=useState(false)
 

  const logout = () => {
    // Remove the token from localStorage
    localStorage.removeItem("token");
    navigate('/login')
  }
  return (
    <div>
        <div>
          <nav id='navbar' className={navbarcss.nav}>

            <NavLink to='/markhome' className={navbarcss.navtitle}>
              Scape
            </NavLink>

            <div className={navbarcss.navmenu} onClick={()=>{
              console.log("Menu clicked");
              setmenuopen(!menuopen)
            }}>
              <span></span>
              <span></span>
              <span></span>
            </div>

            <ul className={menuopen ? navbarcss.open : ""}>
              <li>
                <NavLink to='/' className={navbarcss.navlink}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/api/user/verify' className={navbarcss.navlink}>
                  uses
                </NavLink>
              </li>
              <li>
                <NavLink to='/forget'className={navbarcss.navlink}>
                 about
                </NavLink>
              </li>
              <li>
                <NavLink to='/otp'className={navbarcss.navlink}>
                  contact
                </NavLink>
              </li>

              <li>
               <button onClick={logout} className={navbarcss.navbtn}>Logout</button>
              </li>
            </ul>
          </nav>

        
        </div>
    </div>
  );
}

export default Navbar;
