import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { makeFakeOfferforMainCardItem } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import { FavoriteCard } from './favorite-card';


describe('Component: FavoriteCard', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);

  it('should render correctly', async () => {

    const store = mockStore({
      DATA: { isDataLoaded: false },
      FILTER: { name: 'Paris' },
    });

    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <FavoriteCard card={makeFakeOfferforMainCardItem()} />
        </HistoryRouter>
      </Provider>
    );

    const clickAction = screen.getByRole('button');
    await userEvent.click(clickAction);
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      'offer/status/pending',
      'data/fetchOffers/pending',
      'offer/status/rejected',
      'data/fetchOffers/rejected',
    ]);

    expect(screen.getByText('test for MainCardItem')).toBeInTheDocument();
  });

});
