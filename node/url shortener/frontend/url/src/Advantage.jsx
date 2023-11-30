import React,{useEffect} from 'react'
import advantagecss from './advantage.module.css';
import git from '../images/git.png';
import easy from '../images/easy.png'
import consistency from '../images/consistency.png'
import extensibility from '../images/extensibility.png'
import opensource from '../images/open_source.png'
import access from '../images/access.png'
import versality from '../images/versality.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



function Advantage() {

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    }, []);

  return (
   <div>
   <div id='adv'></div>
   <div className={advantagecss.body}  data-aos="fade-up"  id='adv'>
        <div className={advantagecss.container}>
           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={consistency}/>
            <h4 className={advantagecss.gridhead}>consistency</h4>
            <h6>Markdown encourages a consistent writing style and structure. This consistency 
               is especially useful in technical documentation and collaborative writing, 
               where a uniform format enhances readability.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={extensibility}/>
            <h4 className={advantagecss.gridhead}>extensibility</h4>
            <h6>While the basic Markdown syntax is minimal, there are various flavors and extensions available (e.g., GitHub Flavored Markdown) that add extra features, 
               such as task lists and code highlighting, making it more powerful when needed.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={git}/>
            <h4 className={advantagecss.gridhead}>Version Control Friendly</h4>
            <h6>Markdown documents work seamlessly with version control systems like Git. You can track changes, 
               collaborate with others, and easily see differences between versions.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={opensource}/>
            <h4 className={advantagecss.gridhead}>open source</h4>
            <h6>Markdown is an open standard with numerous implementations and libraries available,
                which means you are not locked into a specific software or service.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={access}/>
            <h4 className={advantagecss.gridhead}>accessibility</h4>
            <h6>Markdown can be made accessible to users with disabilities through appropriate markup and guidelines. 
               It can be a good choice for creating content that needs to meet accessibility standards.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={versality}/>
            <h4 className={advantagecss.gridhead}>versatility</h4>
            <h6>Markdown viewers render Markdown documents into well-formatted and visually appealing content,
               making it easier to read and understand the text.</h6>
            </div>
           </div>

           <div className={advantagecss.box}>
            <div className={advantagecss.content}>
            <img src={easy}/>
            <h4 className={advantagecss.gridhead}>simplicity</h4>
            <h6>Markdown is easy to learn and use. Its syntax is straightforward and intuitive, consisting of plain text with minimal special characters. This makes it accessible to a wide range of users, 
               including those who may not have extensive technical expertise.</h6>
            </div>
           </div>
        </div>
    </div>
    </div>
  )
}

export default Advantage