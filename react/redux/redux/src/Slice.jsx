// Slice.js
import { createSlice } from '@reduxjs/toolkit';
import i1 from './images/i1.png'

const initialState = {
  "id": 2,
  "title": "iPhone X",
  "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  "price": 899,
  "discountPercentage": 17.94,
  "rating": 4.44,
  "stock": 34,
  "brand": "Apple",
  "category": "smartphones",
  "quantity":1,
  "thumbnail": i1
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    increment: (state) => {
      var newQuantity = state.quantity + 1;
      if(newQuantity>state.stock){
       return alert('Please select within the limit')
      }
      return { ...state, quantity: newQuantity, price: state.price + initialState.price};
    },
    decrement: (state) => {
      var newQuantity = state.quantity - 1;
      if(newQuantity<1){
        return alert('please select valid quantity')
       }
      return { ...state, quantity: newQuantity, price: state.price - initialState.price };
    },
  },
});

export const { increment, decrement } = productSlice.actions;

export default productSlice.reducer;
