import React from 'react';
import './home.css'; // Assuming style.css is in the same directory as your React component
import car from './images/car.png'


const Home = () => {
  return (
    <div>
      {/* Start Navbar */}
      <nav>
      <div className="container nav-container">
          <a href="" className="logo">
            <h3>Royal Cars.</h3>
          </a>
          <ul className="nav-link">
            <li>
              <a href="" style={{ '--i': 1 }}>
                Home
              </a>
            </li>
            <li>
              <a href="" style={{ '--i': 2 }}>
                About
              </a>
            </li>
            <li>
              <a href="" style={{ '--i': 3 }}>
                Services
              </a>
            </li>
      
            <li>
              <a href="" style={{ '--i': 5 }}>
                Contact
              </a>
            </li>
          </ul>
          <ul className="social-link">
            <li>
              <a href="" style={{ '--i': 1 }}>
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="" style={{ '--i': 2 }}>
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="" style={{ '--i': 3 }}>
                <i className="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}

      {/* Start Header Section */}
      <header>
      <div className="container header-container">
          <div className="header-left">
            <h1>Car Dealing Experience.</h1>
            <p>
            Royal Cars aims to exceed expectations. Elevate your travel experience with Royal Cars, where luxury meets the road, and every drive becomes a regal affair.
            </p>
            <a href="" className="btn">
              Explore Cars
            </a>
          </div>
          <div className="header-right">
            <div className="sq-box">
              <img src={car} alt="" />
            </div>
          </div>
        </div>
        <div className="sq-box2"></div>
      </header>
      {/* End Header Section */}
    </div>
  );
};

export default Home;
