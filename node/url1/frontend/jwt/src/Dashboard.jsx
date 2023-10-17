import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import dash from './dashboard.module.css';
import img1 from './images/i1.png';
import img2 from './images/i2.jpg';
import img3 from './images/i3.webp';
import img4 from './images/i4.webp';
import img5 from './images/i2.png';

function Dashboard() {
  const [urlsToday, setUrlsToday] = useState(0);
  const [urlsThisMonth, setUrlsThisMonth] = useState(0);

  useEffect(() => {
    // Simulated data retrieval - Replace with your data fetching logic
    // For now, let's assume we have 'urlsCreatedToday' and 'urlsCreatedThisMonth' data
    const urlsCreatedToday = 10; // Replace with actual data
    const urlsCreatedThisMonth = 50; // Replace with actual data

    setUrlsToday(urlsCreatedToday);
    setUrlsThisMonth(urlsCreatedThisMonth);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <div className={dash.count}>
        <p className={dash.url}>URLs Created Today<br/> {urlsToday}</p>
        <p className={dash.url}>URLs Created This Month<br/> {urlsThisMonth}</p>
      </div>
      <div className={dash['image-grid']}>
        <img className={dash['image-grid-col-2']} src={img1} alt="Image Description" /> 
        <img src={img2} alt="Image Description" /> 
        <img src={img3} alt="Image Description" /> 
        <img src={img4} alt="Image Description" /> 
        <img src={img5} alt="Image Description" /> 
      </div>
    </div>
  );
}

export default Dashboard;
