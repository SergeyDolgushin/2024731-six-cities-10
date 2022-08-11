import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { MainPage } from '../../pages/main-page/main-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { PropertyPage } from '../../pages/property-page/property-page';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { PageNotFound } from '../page-not-found/page-not-found';
import { PrivateRoute } from '../private-route/private-route';

import { AppRoute } from '../../const';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getOffers } from '../../store/data-process/selectors';

function App(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <Routes>
      <Route path={AppRoute.Root} element={<MainPage />} />
      <Route path={AppRoute.Offer} element={<PropertyPage />} />
      <Route
        path={AppRoute.Favorites}
        element={
          <PrivateRoute
            authorizationStatus={authorizationStatus}
          >
            <FavoritesPage cards={offers} />
          </PrivateRoute>
        }
      />
      <Route path={AppRoute.Login} element={<LoginScreen />} />
      <Route path={AppRoute.PageNotFound} element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
