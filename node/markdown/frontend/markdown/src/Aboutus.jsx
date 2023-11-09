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
      <div className={aboutcss.aboutbody} data-aos="fade-up">

        {/* first two cards start */}
        <div className={aboutcss.aboutcard}>
          <div className={aboutcss.aboutcard1}>
            <div className={aboutcss.abouthead}>
            <FontAwesomeIcon icon={faSquare} className={aboutcss.abouticon}/>
             <h1>responsive layout</h1>
            </div>

            <div className={aboutcss.aboutpara}>
            <p>These are the users who write and create content using Markdown. Markdown is a lightweight markup language that allows users to format text easily 
              for use in various applications, such as web content, </p>
            </div>
          </div>

          <div className={aboutcss.aboutcard1}>
            <div className={aboutcss.abouthead}>
            <FontAwesomeIcon icon={faSquare} className={aboutcss.abouticon}/>
             <h1>responsive layout</h1>
            </div>

            <div className={aboutcss.aboutpara}>
            <p>These are the users who write and create content using Markdown. Markdown is a lightweight markup language that allows users to format text easily 
              for use in various applications, such as web content, </p>
            </div>
          </div>
        </div>
         {/* first two cards end*/}

         <div className={aboutcss.aboutcards}>
          <div className={aboutcss.aboutcards1}>
            <div className={aboutcss.aboutheads}>
            <FontAwesomeIcon icon={faSquare} className={aboutcss.abouticon}/>
             <h1>responsive layout</h1>
            </div>

            <div className={aboutcss.aboutparas}>
            <p>These are the users who write and create content using Markdown. Markdown is a lightweight markup language that allows users to format text easily 
              for use in various applications, such as web content.</p>
            </div>
          </div>
          </div>

      </div>
    </div>
  );
}

export default Aboutus;
