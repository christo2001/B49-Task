import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import img1 from './images/img2.jpg';
import img2 from './images/pic1.jpg';
import all from './images/all.webp'
import all1 from './images/all1.webp'
import all2 from './images/all2.webp'
import all3 from './images/all3.webp'
import all4 from './images/all4.webp'
import all5 from './images/all5.webp'
import all6 from './images/all6.webp'
import all7 from './images/all7.webp'
import all8 from './images/all8.webp'
import all9 from './images/all9.webp'
import './Home.css';

const imageinfo = [
  { imageurl: all1, title: 'how long would it take to learn motion graphics',
    desc:'motion graphics is like creating moving pictures with design and animation in a cool way'
    ,read:'read more' },

    { imageurl: all2, title: 'How to Become a Motion Graphics Designer – Complete Career Roadmap',
    desc:'Imagine if pictures could come to life, telling stories and conveying messages with movement'
    ,read:'read more' },

    { imageurl: all3, title: 'The Scope of Motion Graphics in 2023',
    desc:'Ever seen those moving pictures on your screen that tell a story? That’s motion graphics!'
    ,read:'read more' },

    { imageurl:all4, title: '8 Best YouTube Channels to Learn Digital Marketing 2023',
    desc:'‍In today’s digital age, staying ahead of the curve in the field of marketing is'
    ,read:'read more' },

    { imageurl: all5, title: 'Top 10 Best Automation Testing Tools in 2023',
    desc:'Automation testing tools have really become a great and important factor in building efficient web'
    ,read:'read more' },

  { imageurl: all6, title: 'Top Skills Required to Become a Digital Marketer',
    desc:'Digital marketing is one of the most dynamic industries that has transformed how businesses connect'
    ,read:'read more' },

    { imageurl: all7, title: 'Career Opportunities in Digital Marketing | Digital Marketing Career',
    desc:'As we move forward in today’s digital age, the need for businesses to engage with'
    ,read:'read more' },

    { imageurl: all8, title: 'UI/UX Project Showcase: UX-perience Elevated',
    desc:'Are you a professional UI/UX designer who finds it hard to attract your clients or'
    ,read:'read more' },

    { imageurl: all9, title: '10 Best Data Science Online Courses for Beginners | 2023',
    desc:'In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most'
    ,read:'read more' },
];

function Home() {
  const [images, setImages] = useState(imageinfo);

  return (
    <>

<div className="your-container">
      <img src={all} alt="Your Image" className="responsive-img" />
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

export default Home;

