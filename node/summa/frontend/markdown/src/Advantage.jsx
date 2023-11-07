import React from 'react'
import advantagecss from './advantage.module.css';
import git from '../images/git.png';
import easy from '../images/easy.png'
import document from '../images/document.png'
function Advantage() {
  return (
   <div className={advantagecss.body} id='adv'>
        <div className={advantagecss.container}>
           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={easy}/>
            <h6>Markdown viewers render Markdown documents into well-formatted and visually appealing content,
               making it easier to read and understand the text.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={easy}/>
            <h6>Markdown viewers render Markdown documents into well-formatted and visually appealing content,
               making it easier to read and understand the text.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={git}/>
            <h6>Markdown viewers render Markdown documents into well-formatted and visually appealing content,
               making it easier to read and understand the text.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={easy}/>
            <h6>Markdown viewers render Markdown documents into well-formatted and visually appealing content,
               making it easier to read and understand the text.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={easy}/>
            <h6>Markdown viewers render Markdown documents into well-formatted and visually appealing content,
               making it easier to read and understand the text.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={easy}/>
            <h6>Markdown viewers render Markdown documents into well-formatted and visually appealing content,
               making it easier to read and understand the text.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={easy}/>
            <h6>Markdown viewers render Markdown documents into well-formatted and visually appealing content,
               making it easier to read and understand the text.</h6>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Advantage