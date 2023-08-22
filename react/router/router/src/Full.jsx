
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import img1 from './images/img2.jpg';
import img2 from './images/pic1.jpg';
import full from './images/full.webp'
import full2 from './images/full2.png'
import f1 from './images/f1.gif'
import f2 from './images/f2.png'
import f3 from './images/f3.png'
import f4 from './images/f4.jpg'
import f5 from './images/f5.webp'
import f6 from './images/f6.webp'
import './Full.css'; // Import your responsive CSS styles

const imageinfo = [
  { imageurl: f1, title: 'Are Front-End Developers Paid Less Than Back-End Developers?',
    desc:'Look for the top high-paying IT jobs in the market and you will trace Full'
    ,read:'read more' },

    { imageurl: f2, title: 'Is CS Degree required for a Full Stack Development Career?',
    desc:'It is projected that full-stack development jobs are likely to grow by 22% over the'
    ,read:'read more' },

    { imageurl: f3, title: 'Unlocking the Future: Top 5 Web Development Programming Languages in 2023',
    desc:'Are you curious about the best programming languages for building websites in 2023? It’s like'
    ,read:'read more' },

    { imageurl: f4, title: 'How to create your own eCommerce Website like Amazon/Flipkart',
    desc:'The first stepping stone to set off the e-commerce juggernaut in India was perhaps laid'
    ,read:'read more' },

    { imageurl: f5, title: 'Now Become A Full Stack Developer In 90 Days!',
    desc:'Are you wondering how to become a skilled Full Stack Developer? That also just in'
    ,read:'read more' },

  { imageurl: f6, title: 'How To Become A Full Stack Developer?',
    desc:'How to become a Full Stack Developer? What are the programming languages, which courses, and'
    ,read:'read more' },

 
];

function Full() {
  const [images, setImages] = useState(imageinfo);

  return (
    <>
        <div className="your-container">
      <img src={full} alt="Your Image" className="responsive-img" />
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
  );
}

export default Full;
