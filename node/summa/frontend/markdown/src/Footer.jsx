import React from 'react'
import footercss from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram,faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div>
        <div className={footercss.body}>
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10 L50 10 L50 50 L10 50 Z" fill="blue" />
    </svg>
        </div>
    </div>
  )
}

export default Footer