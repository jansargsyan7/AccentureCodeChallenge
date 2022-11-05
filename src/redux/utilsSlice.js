import { createSlice } from '@reduxjs/toolkit';

const utilSlice = createSlice({
  name: 'util',
  initialState: {
    isLoading: true,
  },
  reducers: {
    isLoadingToggle(state, action) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const { isLoadingToggle } = utilSlice.actions;
export default utilSlice.reducer;
