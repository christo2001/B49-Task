import React from 'react';

const ImageDetails = ({ image }) => {
  // Ensure the image prop is defined before rendering
  if (!image) {
    return <div>No image selected.</div>;
  }

  return (
    <div>
      <h2>Image Details</h2>
      <img 
        src={image.img} 
        alt={image.name} 
        style={{ width: '300px', height: '300px', objectFit: 'cover' }} 
      />
      <p><strong>Category:</strong> {image.cat}</p>
      <p><strong>Name:</strong> {image.name || 'No Name Available'}</p>
    </div>
  );
};

export default ImageDetails;
