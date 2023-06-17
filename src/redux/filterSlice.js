import { createSlice } from '@reduxjs/toolkit';


const initStateFilter = '';

const filterSlice = createSlice({
  name: 'SETFILTER',
  initialState: initStateFilter,
  reducers: {
    setFilter: (state, { payload }) => {
      return (state = payload);
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { setFilter } = filterSlice.actions;
