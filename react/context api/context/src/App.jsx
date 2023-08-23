import { useState } from 'react';

import './App.css';
import { Productsprovider } from './Product.jsx'; // Corrected import
import Animalsound from './Usecontext.jsx'; // Corrected component name

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

