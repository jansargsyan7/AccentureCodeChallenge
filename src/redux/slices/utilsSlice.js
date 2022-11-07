import { createSlice } from '@reduxjs/toolkit';

const utilSlice = createSlice({
  name: 'util',
  initialState: {
    isLoading: true,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = utilSlice.actions;
export default utilSlice.reducer;
