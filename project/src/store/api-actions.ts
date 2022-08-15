import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.js';
import { saveToken, dropToken } from '../services/token';
import { APIRoute } from '../const';
import { AuthData, UserData, Card, Comment, UserComment, UserBookmark } from '../types/types';

export const fetchOffersAction = createAsyncThunk<Card[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Card[]>(APIRoute.Offers);
    return data;
  },
);

export const fetchOfferAction = createAsyncThunk<Card, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<Card>(`${APIRoute.Offers}/${hotelId}`);
    return data;
  },
);

export const fetchOffersNearbyAction = createAsyncThunk<Card[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOfferNearby',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<Card[]>(`${APIRoute.Offers}/${hotelId}/nearby`);
    return data;
  },
);

export const fetchCommentsAction = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComment',
  async (hotelId, { dispatch, extra: api }) => {
    const { data } = await api.get<Comment[]>(`${APIRoute.Comments}/${hotelId}`);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    await api.get(APIRoute.Login);
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
  },
);

export const sendComment = createAsyncThunk<Comment[], UserComment, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'send/comment',
  async ({ selectedCard, comment, rating }, { dispatch, extra: api }) => {
    const { data } = await api.post<Comment[]>(`${APIRoute.Comments}/${selectedCard}`, { comment, rating });
    return data;
  },
);

export const setStatus = createAsyncThunk<Card, UserBookmark, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'offer/status',
  async ({ isFavorite, id }, { dispatch, extra: api }) => {
    const { data } = await api.post<Card>(`${APIRoute.Favorites}/${id}/${Number(!isFavorite)}`);
    return data;
  },
);
