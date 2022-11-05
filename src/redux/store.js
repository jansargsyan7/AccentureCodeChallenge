import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from './utilsSlice';
import productsReducer from './productsSlice';

export const store = configureStore({
  reducer: {
    utils: isLoadingReducer,
    products: productsReducer,
  },
});
