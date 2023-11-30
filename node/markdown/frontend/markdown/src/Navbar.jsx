import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate, Link  } from 'react-router-dom';
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

              <Link to="/urlhome" className={navbarcss.navlink}>Home</Link>

              <Link to="/shorturl" className={navbarcss.navlink}>My url</Link>
              
              <Link to="/dash" className={navbarcss.navlink}>Dashboard</Link>

              
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
