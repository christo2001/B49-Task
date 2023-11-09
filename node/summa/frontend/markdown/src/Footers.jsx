import React from 'react'
import footercss from './footer.module.css'
import img5 from '../images/image5.png';

function Footers() {
  return (
    <div>
       

          <footer>
          <div className={footercss.footerrow}>
            <div className={footercss.footercol}>
            <img src={img5} className={footercss.footerlogo}/>
              <p className={footercss.footerp}>
              Markdown is platform independent. You can create Markdown-formatted text on any device 
              running any operating system.
              </p>
            </div>

            <div className={footercss.footercol}>
              <h3>office</h3>
              <p>ITPL Road</p>
              <p>whitefield, bangalore</p>
              <p>tamilnadu, PIN 636008, India</p>
              <p className={footercss.footeremailid}>markdown@gmail.com</p>
              <h4>+91 - 1234554321</h4>
            </div>

            <div className={footercss.footercol}>
              <h3>links</h3>
              <ul className={footercss.footerul}>
                <li className={footercss.footerli} ><a href='' className={footercss.footera}>home</a></li>
                <li className={footercss.footerli}><a href='' className={footercss.footera}>home</a></li>
                <li className={footercss.footerli}><a href='' className={footercss.footera}>home</a></li>
                <li className={footercss.footerli}><a href='' className={footercss.footera}>home</a></li>
                <li className={footercss.footerli}><a href='' className={footercss.footera}>home</a></li>
              </ul>
            </div>


            <div className={footercss.footercol}>
              <h3>newsletter</h3>
              <form className={footercss.footerform}>
                <input type='email' placeholder='email' required className={footercss.footerinput}/>
                
              </form>
              <button type='submit' className={footercss.footerbtn}>send</button>
            </div>

          </div>
          </footer>

        </div>
  )
}

export default Footers