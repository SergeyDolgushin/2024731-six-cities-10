import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { MainPage } from '../../pages/main-page/main-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { PropertyPage } from '../../pages/property-page/property-page';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { PageNotFound } from '../page-not-found/page-not-found';
import { PrivateRoute } from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';

function App(): JSX.Element {
  const { offers } = useAppSelector((state) => state);

  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Root} element={<MainPage />} />
        <Route path={AppRoute.Offer} element={<PropertyPage />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <FavoritesPage cards={offers} />
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
