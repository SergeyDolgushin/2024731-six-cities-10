import { createSelector } from 'reselect';
import { NameSpace } from '../../const';
import { State } from '../../types/state';

export const getOffers = (state: State) => state[NameSpace.Data].offers;
export const getOffer = (state: State) => state[NameSpace.Data].offer;
export const getOffersNearby = (state: State) => state[NameSpace.Data].offersNearby;
export const getComments = (state: State) => state[NameSpace.Data].comments;
export const selectSortedComments = createSelector(getComments, (comments) =>
  comments.slice(-10).sort((commentA, commentB) =>
    Date.parse(commentB.date) - Date.parse(commentA.date)));

