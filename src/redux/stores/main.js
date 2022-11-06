import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from '../slices/utilsSlice';
import productsReducer from '../slices/productsSlice';

export const store = configureStore({
  reducer: {
    utils: isLoadingReducer,
    products: productsReducer,
  },
});
