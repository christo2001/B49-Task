import React, { useEffect, useState } from 'react';
import aboutcss from './aboutus.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faLock,faEnvelope,faSquare} from "@fortawesome/free-solid-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Aboutus() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <div id='about'></div>
      <div className={aboutcss.aboutbody} data-aos="fade-up">

        {/* first two cards start */}
        <div className={aboutcss.aboutcard}>
          <div className={aboutcss.aboutcard1}>
            <div className={aboutcss.abouthead}>
            <FontAwesomeIcon icon={faSquare} className={aboutcss.abouticon}/>
             <h1>History</h1>
            </div>

            <div className={aboutcss.aboutpara}>
            <p>Markdown is a lightweight markup language that was created by John Gruber and Aaron Swartz in 2004.
               It was designed to be easy to read and write, and to convert to HTML seamlessly. Markdown was developed with the idea of creating a simple,
               human-readable syntax that could be converted into HTML for use in web content.. The syntax was designed to be intuitive and 
               visually appealing even in its raw form. </p>
            </div>
          </div>

          <div className={aboutcss.aboutcard1}>
            <div className={aboutcss.abouthead}>
            <FontAwesomeIcon icon={faSquare} className={aboutcss.abouticon}/>
             <h1>GitHub and Markdown (2009)</h1>
            </div>

            <div className={aboutcss.aboutpara}>
            <p>GitHub, a popular platform for hosting and collaborating on software projects, 
              adopted Markdown for its simplicity and readability. 
              GitHub's widespread use further contributed to the popularity of Markdown. </p>
            </div>
          </div>
        </div>
         {/* first two cards end*/}

         <div className={aboutcss.aboutcards}>
          <div className={aboutcss.aboutcards1}>
            <div className={aboutcss.aboutheads}>
            <FontAwesomeIcon icon={faSquare} className={aboutcss.abouticon}/>
             <h1>Continued Evolution</h1>
            </div>

            <div className={aboutcss.aboutparas}>
            <p>Markdown continues to evolve, and different platforms may support additional
               features or extensions beyond the CommonMark standard.Markdown is now widely used across various platforms
                and applications for creating content in a readable and straightforward format. Its simplicity and versatility make it a popular choice for writers, developers, and anyone 
               looking for an easy way to format plain text. </p>
            </div>
          </div>
          </div>

      </div>
    </div>
  );
}

export default Aboutus;
