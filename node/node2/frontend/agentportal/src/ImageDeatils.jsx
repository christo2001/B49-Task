import React from 'react';


const ImageDetails = ({ image, onClose }) => {
  if (!image) return null; // If no image, do not render anything

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg p-6 w-11/12 sm:w-1/2 lg:w-1/3 relative" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-semibold mb-4">Image Details</h2>
        <img
          src={image.img}
          alt={image.name}
          className="w-full h-60 object-cover rounded-md mb-4"
        />
        <p className="text-lg"><strong>Category:</strong> {image.cat}</p>
        <p className="text-lg mb-4"><strong>Name:</strong> {image.name || 'No Name Available'}</p>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-700 rounded-full p-2 text-lg"
        >
          &#10005;
        </button>
      </div>
    </div>
  );
};

export default ImageDetails;
