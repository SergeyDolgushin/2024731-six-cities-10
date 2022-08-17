import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { makeFakeOffersForFavorites } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import { FavoritesCities } from './favorites-cities';
import { CITIES } from '../../const';


describe('Component: FavoritesCities', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const history = createMemoryHistory();
  it('should render correctly', async () => {

    const store = mockStore({
      DATA: { isDataLoaded: false },
      FILTER: { name: 'Paris' },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoritesCities cards={makeFakeOffersForFavorites()} city={CITIES[0]} key={1} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText(CITIES[0])).toBeInTheDocument();
    expect(screen.queryByText(CITIES[1])).not.toBeInTheDocument();
    expect(screen.getAllByText('test for MainCardItem').length).toBe(4);
  });
});
