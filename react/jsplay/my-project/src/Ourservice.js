import React from 'react'
import about from './images/about.png';
import './service.css'
import { FaTaxi,FaMoneyBill,FaCogs,FaSprayCan,FaPumpSoap } from 'react-icons/fa';
import './about.css';


function Ourservice() {
  return (
    <div>
        
      <div className='services'>
      <h1 className='number'>02</h1>
      <div className='abouttext'>
      <div className='textcenter'>OUR SERVICES</div>
      </div>
      </div>

      <div className='container'>  
    <div className="card-group c2group">
        <div className="card c2 border-0 mb-4"> {/* Add mb-4 class for bottom margin */}
            <FaTaxi className="icon" />
            <div className="card-body c2body">
                <h5 className="card-title c2title">CAR RENTAL</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        <div className="card c2 border-0 mb-4"> {/* Add mb-4 class for bottom margin */}
            <FaMoneyBill className="icon" />
            <div className="card-body c2body">
                <h5 className="card-title">CAR FINANCING</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
        <div className="card c2 border-0 mb-4"> {/* Add mb-4 class for bottom margin */}
            <FaTaxi className="icon" />
            <div className="card-body c2body">
                <h5 className="card-title">CAR INSPECTION</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
            </div>
        </div>
    </div>
</div>






<div className='container'>  
    <div className="card-group c2group">
        <div className="card c3 border-0 mb-4"> {/* Add mb-4 class for bottom margin */}
            <FaCogs className="icon" />
            <div className="card-body c2body">
                <h5 className="card-title c2title">AUTO REPAIRING</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        <div className="card c3 border-0 mb-4"> {/* Add mb-4 class for bottom margin */}
            <FaSprayCan className="icon" />
            <div className="card-body c2body">
                <h5 className="card-title">AUTO PAINTING</h5>
                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
        </div>
        <div className="card c3 border-0 mb-4"> {/* Add mb-4 class for bottom margin */}
            <FaPumpSoap className="icon" />
            <div className="card-body c2body">
                <h5 className="card-title">AUTO CLEANING</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default Ourservice