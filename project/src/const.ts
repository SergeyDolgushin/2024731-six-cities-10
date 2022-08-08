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

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
}

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const URL_MARKER_DEFAULT =
  './img/pin.svg';

export const URL_MARKER_CURRENT =
  './img/pin-active.svg';

export const MAP_CLASS_NAME = 'cities__map';

export const FilterType = {
  POPULAR: 'Popular',
  LOW: 'Price: low to high',
  HIGH: 'Price: high to low',
  TOP: 'Top rated first',
};

export const TIMEOUT_SHOW_ERROR = 2000;
