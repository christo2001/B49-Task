// store.js
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slice'; // Import the default export

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
