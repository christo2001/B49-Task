// Slice.js
import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: 0, // Start with 0 if you want to display a numeric value
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

export const { increment, decrement } = productSlice.actions;

export default productSlice.reducer;
