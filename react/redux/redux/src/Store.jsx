// store.js
import { configureStore } from '@reduxjs/toolkit';
import productSlice from './Slice'; // Import the default export

const store = configureStore({
  reducer: {
    product: productSlice,
  },
});

export default store;
