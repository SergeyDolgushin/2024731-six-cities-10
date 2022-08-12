import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { initialState } from '../const';


export const filterProcess = createSlice({
  name: NameSpace.Filter,
  initialState: initialState[NameSpace.Filter],
  reducers: {
    getFilter: (state, action) => {
      state.filter = action.payload.filter;
    },
    getCity: (state, action) => {
      state.name = action.payload.name;
    },
  },
});
