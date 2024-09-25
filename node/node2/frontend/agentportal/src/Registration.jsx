import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Container, Row, Col, Form, Modal } from 'react-bootstrap'; // Import Bootstrap components

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
        const response = await axios.get('https://hotel-booking-api-vyhu.onrender.com/api/flat/images'); // Adjust the URL based on your API endpoint
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
    return <div className="text-center">Loading images...</div>;
  }

  if (error) {
    return <div className="text-center text-danger">{error}</div>;
  }

  return (
    <Container>
      <h1 className="text-center my-4">E-CART</h1>
      
      {/* Search bar and category filter */}
      <Row className="mb-4 justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <Form.Control
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name"
            className="mb-3"
          />
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Form.Control
            as="select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="washing machine">Washing Machine</option>
            <option value="TV">TV</option>
            <option value="mobile">Mobile</option>
            <option value="WATCHES">Watches</option>
            <option value="AC">AC</option>
          </Form.Control>
        </Col>
      </Row>

      {/* Images grid */}
      <Row>
        {filteredImages.length > 0 ? (
          filteredImages.slice(0, 9).map((image) => ( // Limit to 9 images for the 3x3 layout
            <Col xs={12} sm={6} md={4} className="mb-4" key={image._id}>
              <div className="card shadow-sm">
                <img
                  src={image.img}
                  alt="Flat"
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{image.name || 'No Name Available'}</h5>
                  <p className="card-text text-muted">{image.cat}</p>
                  <Button
                    variant="primary"
                    onClick={() => handleOpenModal(image)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <Col>
            <p className="text-center text-muted">No images found for this category or search term.</p>
          </Col>
        )}
      </Row>

      {/* Modal for displaying selected image details */}
      {selectedImage && (
        <Modal show={!!selectedImage} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedImage.name || 'Image Details'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={selectedImage.img}
              alt="Selected"
              className="img-fluid mb-3"
              style={{ maxHeight: '300px', objectFit: 'cover' }}
            />
            <p>Category: {selectedImage.cat}</p>
            <p>Name: {selectedImage.name || 'No Name Available'}</p>
            <p>Description: {selectedImage.description}</p>
            <p>Stock: {selectedImage.stock}</p>
            <p>Price: {selectedImage.price}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ImageGallery;
