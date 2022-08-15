import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus, FilterType } from '../../const';
import { CommonHeader } from './common-header';
import { makeFakeOffers } from '../../utils/mocks';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const fakeApp = (storeForComponent: MockStore) => (
  <Provider store={storeForComponent}>
    <HistoryRouter history={history}>
      <CommonHeader />
    </HistoryRouter>
  </Provider>
);

describe('component CommonHeader', () => {
  it('should render CommonHeader for authorized user', async () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { isDataLoaded: false, offers: makeFakeOffers() },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    localStorage.setItem('user-cix-cities-email', 'test@test.ru');
    localStorage.setItem('user-cix-cities-img', 'imageUser');

    render(fakeApp(store));

    expect(screen.getByText('test@test.ru')).toBeInTheDocument();

    localStorage.removeItem('user-cix-cities-email');
    localStorage.removeItem('user-cix-cities-img');
  });

  it('should render CommonHeader for non-authorized user', async () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NoAuth },
      DATA: { isDataLoaded: false, offers: makeFakeOffers() },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    localStorage.setItem('user-cix-cities-email', 'test@test.ru');
    localStorage.setItem('user-cix-cities-img', 'imageUser');

    render(fakeApp(store));

    expect(screen.queryByText('test@test.ru')).not.toBeInTheDocument();
    expect(screen.getByText('Sign in')).toBeInTheDocument();

    localStorage.removeItem('user-cix-cities-email');
    localStorage.removeItem('user-cix-cities-img');
  });
});
