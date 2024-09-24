import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ImageDetails from './ImageDeatils';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [category, setCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

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

  // Filter images by selected category and search term
  const filteredImages = images.filter((image) => 
    (category === '' || image.cat === category) &&
    (searchTerm === '' || (image.name && image.name.toLowerCase().includes(searchTerm.toLowerCase())))
  );

  const handleOpenModal = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal by setting selected image to null
  };

  if (loading) {
    return <div>Loading images...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Image Gallery</h1>

      {/* Search bar for filtering by name */}
      <label htmlFor="search">Search by Product Name: </label>
      <input 
        id="search" 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search by name"
      />

      {/* Dropdown to select category */}
      <label htmlFor="category">Filter by Category: </label>
      <select 
        id="category" 
        value={category} 
        onChange={(e) => setCategory(e.target.value)} 
      >
        <option value="">All</option>
        <option value="img">img</option>
        <option value="coin">coin</option>
        <option value="mobile">mobile</option>
      </select>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {filteredImages.length > 0 ? (
          filteredImages.map((image) => (
            <div key={image._id} style={{ margin: '10px' }}>
              <img 
                src={image.img} 
                alt="Flat" 
                style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
              />
              <p>{image.cat}</p>
              <p>{image.name || 'No Name Available'}</p>
              <button onClick={() => handleOpenModal(image)}>Click</button> {/* Open modal with image details */}
            </div>
          ))
        ) : (
          <p>No images found for this category or search term.</p>
        )}
      </div>

      {/* Modal for displaying selected image details */}
      <ImageDetails image={selectedImage} onClose={handleCloseModal} />
    </div>
  );
};

export default ImageGallery;
