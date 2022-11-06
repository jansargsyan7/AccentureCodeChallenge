import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProducts(state, action) {
      state.push(action.payload);
    },
    loadProducts(state, action) {
      return action.payload;
    },
  },
});

export const { addProducts, loadProducts } = productsSlice.actions;
export default productsSlice.reducer;
