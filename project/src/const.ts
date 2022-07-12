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
