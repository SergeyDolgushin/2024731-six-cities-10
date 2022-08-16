import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { AuthorizationStatus, FilterType } from '../../const';
import { makeFakeOffersForFavorites } from '../../utils/mocks';

import HistoryRouter from '../../components/history-route/history-route';
import { createMemoryHistory } from 'history';
import { FavoritesPage } from './favorites-page';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const NUMBER_0F_RENDERED_CARDS = '4';
const FALSE_NUMBER_0F_RENDERED_CARDS = '5';

describe('Component: FavoritesPages', () => {
  it('should render correctly', () => {
    const fakeOffers = makeFakeOffersForFavorites();
    const store = mockStore({
      DATA: { isDataLoaded: false, offers: fakeOffers },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR },
      USER: { authorizationStatus: AuthorizationStatus.Auth },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesPage cards={makeFakeOffersForFavorites()} />
        </HistoryRouter>
      </Provider>
    );
    localStorage.setItem('user-cix-cities-email', 'test@test.ru');
    localStorage.setItem('user-cix-cities-img', 'imageUser');

    expect(screen.getByText(NUMBER_0F_RENDERED_CARDS)).toBeInTheDocument();
    expect(screen.queryByText(FALSE_NUMBER_0F_RENDERED_CARDS)).not.toBeInTheDocument();

    localStorage.removeItem('user-cix-cities-email');
    localStorage.removeItem('user-cix-cities-img');
  });

});

