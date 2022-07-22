export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:selectedCard',
  Root = '/',
  PageNotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT =
  './img/pin.svg';

export const URL_MARKER_CURRENT =
  './img/pin-active.svg';

export const MAP_CLASS_NAME = 'cities__map';
