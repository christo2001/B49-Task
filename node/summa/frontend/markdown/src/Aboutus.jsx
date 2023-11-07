import React from 'react';
import aboutcss from './aboutus.module.css';
import Barchart from './componenets/Barchart.jsx';

function Aboutus() {
  return (
    <div>
      <div className={aboutcss.body}>


        <div className={aboutcss.curved}>
          <h1>markdown</h1>
          <p>Markdown[9] is a lightweight markup language for creating formatted text using a plain-text editor. John Gruber created Markdown in 2004 as a markup language that is easy to read in its source code form with the goal of enabling people "to write using an easy-to-read and easy-to-write plain text format, optionally convert it to structurally valid XHTML (or HTML)."[5]</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" height="80"> {/* Adjust the height here */}
            <path fill="#fff" fillOpacity="1" d="M0,128L48,154.7C96,181,192,235,288,240C384,245,480,203,576,197.3C672,192,768,224,864,224C960,224,1056,192,1152,176C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

      </div>
    </div>
  );
}

export default Aboutus;
