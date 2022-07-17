import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PropertyPage from '../../pages/property-page/property-page';
import LoginScreen from '../../pages/login-screen/login-screen';
import PageNotFound from '../page-not-found/page-not-found';
import PrivateRoute from '../private-route/private-route';

import type { CardsProps } from '../../types/types';
import { AppRoute, AuthorizationStatus } from '../../const';


function App({ cards }: CardsProps): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage cards={cards} />} />
        <Route path={AppRoute.Offer} element={<PropertyPage cards={cards} />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage cards={cards} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.PageNotFound} element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
