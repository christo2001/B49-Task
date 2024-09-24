import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:3333/api/flat/images'); // Adjust the URL based on your API endpoint
        setImages(response.data);
      } catch (err) {
        setError('Error fetching images: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <div>Loading images...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image._id} style={{ margin: '10px' }}>
            <img 
              src={image.img} // Adjust the path if necessary
              alt="Flat" 
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
