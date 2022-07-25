import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getFilter, getOffers } from './action';
import { initialState } from './const';

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.name = action.payload.name;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload.offers;
    })
    .addCase(getFilter, (state, action) => {
      state.filter = action.payload.filter;
    });
});

export { reducer };
