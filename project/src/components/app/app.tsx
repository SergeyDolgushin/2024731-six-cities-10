import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { MainPage } from '../../pages/main-page/main-page';
import { FavoritesPage } from '../../pages/favorites-page/favorites-page';
import { PropertyPage } from '../../pages/property-page/property-page';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { PageNotFound } from '../page-not-found/page-not-found';
import { PrivateRoute } from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';
import { useEffect } from 'react';
import { getOffers } from '../../store/action';
import { roomInfos } from '../../mock/mock';


function App(): JSX.Element {
  const cards = useAppSelector((state) => state.offers);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getOffers({ offers: roomInfos }));
  }, []);

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
