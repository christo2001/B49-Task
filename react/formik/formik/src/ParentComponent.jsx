import React, { useState } from 'react';
import Home from './Home';
import Cart from './Cart';

function ParentComponent() {
  const [editedValue, setEditedValue] = useState('');

  return (
    <div>
      <Home editedValue={editedValue} />
      <Cart onEdit={(value) => setEditedValue(value)} />
    </div>
  );
}

export default ParentComponent;