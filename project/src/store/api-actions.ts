import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { loadOffers, requireAuthorization, setError, setDataLoadedStatus, loadOffer, loadOffersNearby, loadComments } from './action';
import { saveToken, dropToken } from '../services/token';
import { APIRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData, UserData, Card, Comment, UserComment, UserBookmark } from '../types/types';
import { store } from './';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Card[]>(APIRoute.Offers);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffers(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<Card>(`${APIRoute.Offers}/${hotelId}`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffer(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<Card[]>(`${APIRoute.Offers}/${hotelId}/nearby`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffersNearby(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const fetchCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${hotelId}`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadComments(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(data.token, data.email, data.avatarUrl, String(data.id));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const clearErrorAction = createAsyncThunk(
  'game/clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const sendComment = createAsyncThunk<void, UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ selectedCard, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<Comment[]>(`${APIRoute.Comments}/${selectedCard}`, { comment, rating });
    dispatch(setDataLoadedStatus(true));
    dispatch(loadComments(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const setStatus = createAsyncThunk<void, UserBookmark, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/status',
  async ({ isFavorite, id }, { dispatch, extra: api }) => {
    const { data } = await api.post<Card>(`${APIRoute.Favorites}/${id}/${Number(!isFavorite)}`);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadOffer(data));
    dispatch(setDataLoadedStatus(false));
  },
);
