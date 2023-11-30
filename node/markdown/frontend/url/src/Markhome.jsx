import React, { useEffect } from 'react';
import markhomecss from './markhome.module.css';
import Typewriter from 'typewriter-effect';
import img5 from '../images/image5.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Advantage from './Advantage';
import Markdowns from './Markdown';
import Aboutus from './Aboutus';
import Barchart from './componenets/Barchart.jsx';
import Navbar from './Navbar.jsx';
import Footers from './Footers.jsx';
import Cheatsheet from './Cheatsheet.jsx';

function Markhome() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Navbar/>
      <div id='home'></div>
      <div className={markhomecss.body} data-aos="fade-up">
        <section className={markhomecss.about}>
          <div className={markhomecss.main}>
            <img src={img5} className={markhomecss.image} />
            <div className={markhomecss.alltext}>
              <h1 className={markhomecss.top} style={{ 'color': '#1d44f9' }}>React</h1>

              <h1>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings: [" Markdown Viewer"],
                  }}
                />
              </h1>

              <h6> It allows you to parse and render Markdown text as HTML, making it easy to integrate and present Markdown-based documentation, articles, or other content in your React projects</h6>

              <div className={markhomecss.btn}>
              <a href="#markdown">
                learn more
              </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Advantage />
      <Aboutus />
      <Barchart />
      <Cheatsheet/>
      <Markdowns />
      <Footers/>
    </div>
  );
}

export default Markhome;
