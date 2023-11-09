import React, { useEffect } from 'react';
import navbarcss from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  useEffect(() => {
    const menuIcon = document.querySelector('#bxmenu');
    const menuClose = document.querySelector('#bxclose');
    const navbar = document.querySelector('.navnavbar');
    const navbg = document.querySelector('.navbg');
  
    if (menuIcon && navbar && navbg) {
      menuIcon.addEventListener('click', () => {
        if (menuIcon.classList) {
          menuIcon.classList.toggle(navbarcss.bxclose);
        } else {
          console.error('classList is not supported on this element.');
        }
        if (navbar.classList) {
          navbar.classList.toggle('active');
        } else {
          console.error('classList is not supported on the navbar element.');
        }
        if (navbg.classList) {
          navbg.classList.toggle('active');
        } else {
          console.error('classList is not supported on the navbg element.');
        }
      });
    } else {
      console.error('One or more elements were not found.');
    }
  }, []);
  
  // Empty dependency array to run this code only once when the component mounts

  return (
    <div>
      <div className={navbarcss.navbody}>
        <header className={navbarcss.navheader}>
          <a href='#logo' className={navbarcss.navlogo}>
            logo
          </a>
          <FontAwesomeIcon icon={faUser} className={navbarcss.bxmenu} id='bxmenu' />
          <FontAwesomeIcon icon={faLock} className={navbarcss.bxclose} id='bxclose' />

          <nav className={navbarcss.navnavbar}>
            <a href='#'>Advantage</a>
            <a href='#'>About</a>
            <a href='#'>Log Out</a>
          </nav>
        </header>
        <div className={navbarcss.navbg}></div>
      </div>
    </div>
  );
}

export default Nav;
