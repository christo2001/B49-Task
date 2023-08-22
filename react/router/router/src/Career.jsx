import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ca from './images/career.webp'
import ca1 from './images/ca1.jpg'
import ca2 from './images/ca2.png'
import ca3 from './images/ca3.webp'
import c4 from './images/cyber4.gif'
import d2 from './images/data2.webp'



const imageinfo = [
    { imageurl: ca1, title: 'The Future & Scope of Full Stack Developers in India',
      desc:'Have you ever wondered about the future of full stack developers in India? These talented'
      ,read:'read more' },
  
      { imageurl: ca2, title: 'Roles and Responsibilities of a Data Scientist',
      desc:'‍Data science is a rapidly growing field that has become essential for businesses to thrive'
      ,read:'read more' },
  
      { imageurl: ca3, title: 'Top 12 Career Opportunities for UI/UX Design',
      desc:'Are you passionate about offering intuitive and user-friendly digital experiences? Do you have an eye'
      ,read:'read more' },
  
      { imageurl: c4, title: 'Is coding required for cybersecurity? If yes, how crucial is coding for cybersecurity?',
      desc:'Many people ask how important is coding for cybersecurity, and the lawyerly answer is: Well,'
      ,read:'read more' },
      
      { imageurl: d2, title: '10 Best Data Science Online Courses for Beginners | 2023',
    desc:'In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most'
    ,read:'read more' },
  
   
  ];

function Career() {
  const [images, setImages] = useState(imageinfo);
  return (
    <>
     <div className="your-container">
      <img src={ca} alt="Your Image" className="responsive-img" />
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

export default Career