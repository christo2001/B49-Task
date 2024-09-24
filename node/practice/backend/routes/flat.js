import path from 'path';
import fs from 'fs'; // Import the fs module
import multer from 'multer';
import express from 'express';
import { addflat, getAllImages } from '../controllers/flat.js';

// Create the Express router
const router = express.Router();


// Route to add a flat image
router.post('/add', async (req, res) => {
  try {
    await addflat(req);
    res.send('Image uploaded successfully');
  } catch (error) {
    console.error(error);
    res.status(400).send('Error uploading image: ' + error.message);
  }
});

// Route to get all images
router.get('/images', async (req, res) => {
  try {
    const images = await getAllImages(); // Assuming getAllImages returns the image data
    res.json(images); // Return the images as JSON
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching images: ' + error.message);
  }
});

// Export the router
export const flatRouter = router;
