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

export const tabs = [
  {
    name: 'Paris',
    isActive: true,
    id: 0
  },
  {
    name: 'Cologne',
    isActive: false,
    id: 1
  },
  {
    name: 'Brussels',
    isActive: false,
    id: 2
  },
  {
    name: 'Amsterdam',
    isActive: false,
    id: 3
  },
  {
    name: 'Hamburg',
    isActive: false,
    id: 4
  },
  {
    name: 'Dusseldorf',
    isActive: false,
    id: 5
  },
];
