import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import c from './images/cyber.jpg'
import c1 from './images/cyber1.webp'
import c2 from './images/cyber2.gif'
import c3 from './images/cyber3.png'
import c4 from './images/cyber4.gif'



const imageinfo = [
    { imageurl: c1, title: 'Cybersecurity Vs Ethical Hacking: Top 10 Differences',
      desc:'Cybersecurity & Ethical hacking and have been key in making sure that your data online'
      ,read:'read more' },
  
      { imageurl: c2, title: 'What is Cybersecurity? Importance and its uses & the growing challenges in 2023!',
      desc:'Look around today, you will witness that we are more reliant on technology and devices'
      ,read:'read more' },
  
      { imageurl: c3, title: '8 Different Types of Cybersecurity and Threats Involved',
      desc:'Cybersecurity refers to the protection of devices, processes, infrastructure, and assets of the organization from'
      ,read:'read more' },
  
      { imageurl: c4, title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
      desc:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,'
      ,read:'read more' },
  
   
  ];


function Cyber() {
 const [images, setImages] = useState(imageinfo);
  return (
    <>
     <div className="your-container">
      <img src={c} alt="Your Image" className="responsive-img" />
      {/* Other content */}
    </div>


    <div className="card-container">
      {images.map((image, index) => (
        <Card key={index} className="custom-card">
          <Card.Img variant="top" src={image.imageurl} alt={image.desc} />
            <h6 className='title'>{image.title}</h6>
            <p>{image.desc}</p>
            <p className='read'>{image.read}</p>
        </Card>
      ))}
    </div>
    </>
  )
}

export default Cyber