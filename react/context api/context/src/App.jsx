import { useState } from 'react';

import './App.css';
import { Productsprovider } from './Animalcontext.jsx'; // Corrected import
import Animalsound from './Animalsound1.jsx'; // Corrected component name

function App() {
  return (
    <Productsprovider>
      <div>
        <Animalsound />
      </div>
    </Productsprovider>
  );
}

export default App; // Added missing semicolon

