import { createAction } from '@reduxjs/toolkit';
import { Card, Comment } from '../types/types';
import { Name, Filter } from './types';
import { AuthorizationStatus } from '../const';

const changeCity = createAction<{ name: Name }>('main/changeCity');
const getOffers = createAction<{ offers: Card[] }>('main/getOffers');
const getFilter = createAction<{ filter: Filter }>('main/getFilter');
const loadOffers = createAction<Card[]>('data/loadOffers');
const loadOffersNearby = createAction<Card[]>('data/loadOffersNearby');
const loadComments = createAction<Comment[]>('data/loadComments');
const loadOffer = createAction<Card>('data/loadOffer');
const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
const setError = createAction<string | null>('game/setError');
const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');

export { changeCity, getOffers, getFilter, loadOffers, requireAuthorization, setError, setDataLoadedStatus, loadOffer, loadOffersNearby, loadComments };
