import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import d1 from './images/data1.jpg'
import d2 from './images/data2.webp'
import d3 from './images/data3.webp'
import d4 from './images/data4.webp'
import d5 from './images/data5.webp'
import d6 from './images/data6.webp'
import d7 from './images/data7.webp'
import './data.css'


const imageinfo = [
  { imageurl: d2, title: '10 Best Data Science Online Courses for Beginners | 2023',
    desc:'In today’s rapidly evolving digital landscape, Data Science has emerged as one of the most'
    ,read:'read more' },

    { imageurl: d3, title: 'Data Science Webinars and Workshops',
    desc:'In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data'
    ,read:'read more' },

    { imageurl: d4, title: '10 Best Data Science Frameworks in 2023',
    desc:'Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.'
    ,read:'read more' },

    { imageurl: d5, title: '7 Must-Watch Data Science Focused YouTube Channels for Effective Learning',
    desc:'Data science has become one of the most sought-after skills in the current job market.'
    ,read:'read more' },

    { imageurl: d6, title: 'Everything about Data Scientist Salary in India | 2023',
    desc:'Are you curious about the highly sought-after field of data science and the potential it'
    ,read:'read more' },

  { imageurl: d7, title: 'How Long Would It Take to Learn Data Science?',
    desc:'Have you ever wondered how much time it takes to learn data science? It’s an'
    ,read:'read more' },

 
];

function Data() {
  const [images, setImages] = useState(imageinfo);
  return (
    <>
     <div className="your-container">
      <img src={d1} alt="Your Image" className="responsive-img" />
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

export default Data