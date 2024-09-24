import React from 'react';
import "./ImageDeatils.css"

const ImageDetails = ({ image, onClose }) => {
  if (!image) return null; // If no image, do not render anything

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Image Details</h2>
        <img 
          src={image.img} 
          alt={image.name} 
          style={{ width: '300px', height: '300px', objectFit: 'cover' }} 
        />
        <p><strong>Category:</strong> {image.cat}</p>
        <p><strong>Name:</strong> {image.name || 'No Name Available'}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ImageDetails;
