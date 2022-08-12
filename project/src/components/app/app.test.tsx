import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus, AppRoute, FilterType } from '../../const';
import App from './app';
import { makeFakeOfferforPropertiesPage, makeFakeOffers } from '../../utils/mocks';

const mockStore = configureMockStore();

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  DATA: { isDataLoaded: false },
  FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
});

const history = createMemoryHistory();

const fakeApp = (storeForComponent: MockStore) => (
  <Provider store={storeForComponent}>
    <HistoryRouter history={history}>
      <App />
    </HistoryRouter>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "PageNotFound" when user navigate to "/*"', () => {
    history.push('/dfdf');

    render(fakeApp(store));

    expect(screen.getByText(/Ошибка 404/i)).toBeInTheDocument();
    expect(screen.getByText('Перейти на главную страницу', { selector: 'span' })).toBeInTheDocument();
  });

  it('should render "MainScreen" when authorized user navigate to "/login"', () => {
    const storeNotAuth = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { isDataLoaded: false, offers: makeFakeOffers() },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    history.push(AppRoute.Login);
    render(fakeApp(storeNotAuth));

    expect(screen.queryByText(/E-mail/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Password/i)).not.toBeInTheDocument();
    expect(screen.getByText(/4 places to stay in Paris/i)).toBeInTheDocument();
  });

  it('should render "MainScreen" when user navigate to "/"', () => {
    const storeNotAuth = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NoAuth },
      DATA: { isDataLoaded: false, offers: makeFakeOffers() },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    history.push(AppRoute.Root);
    render(fakeApp(storeNotAuth));

    expect(screen.getByText(/4 places to stay in Paris/i)).toBeInTheDocument();
  });

  it('should render "FavoritesPage" when user navigate to "/favorite"', () => {
    const storeAuth = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { isDataLoaded: false, offers: makeFakeOffers() },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    history.push(AppRoute.Favorites);
    render(fakeApp(storeAuth));

    expect(screen.getByText(/Nothing yet saved/i)).toBeInTheDocument();
  });

  it('should render "PropertiesPage" when user navigate to "/offer/:id"', () => {
    const storeAuth = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { isDataLoaded: false, offers: makeFakeOffers(), offer: makeFakeOfferforPropertiesPage(), offersNearby: [], comments: [] },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    history.push(AppRoute.Offer);
    render(fakeApp(storeAuth));

    expect(screen.getByText(/Other places in the neighbourhood/i)).toBeInTheDocument();
    expect(screen.getByText(/test for proper rendering PropertiesPage/i)).toBeInTheDocument();
  });

});
