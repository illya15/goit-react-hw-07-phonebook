import { createSlice } from '@reduxjs/toolkit';

const initialState = '';
const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
