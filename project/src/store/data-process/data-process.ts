import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchOffersAction, fetchOfferAction, fetchOffersNearbyAction, fetchCommentsAction, sendComment, setStatus } from '../api-actions';
import { initialState } from '../const';

export const dataProcess = createSlice({
  name: NameSpace.Data,
  initialState: initialState[NameSpace.Data],
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isDataLoaded = true;
        state.isError = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isError = true;
        state.isDataLoaded = false;
      })
      .addCase(fetchOffersNearbyAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(fetchCommentsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(sendComment.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.isDataLoaded = false;
      })
      .addCase(setStatus.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(setStatus.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isDataLoaded = false;
      });
  }
});

