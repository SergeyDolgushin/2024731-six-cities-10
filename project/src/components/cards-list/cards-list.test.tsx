import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { makeFakeOffers } from '../../utils/mocks';
import HistoryRouter from '../history-route/history-route';
import { CardsList } from './cards-list';

const mockStore = configureMockStore();

describe('Component: CardsList', () => {
  it('should render correctly if data loaded', () => {

    const store = mockStore({
      DATA: { isDataLoaded: false },
      FILTER: { name: 'Paris' },
    });

    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardsList cards={makeFakeOffers()} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.getByText('4 places to stay in Paris')).toBeInTheDocument();
    expect(screen.queryByText('5 places to stay in Paris')).not.toBeInTheDocument();
  });

  it('should render correctly if data not loaded', () => {

    const store = mockStore({
      DATA: { isDataLoaded: true },
      FILTER: { name: 'Paris' },
    });

    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <CardsList cards={makeFakeOffers()} />
        </HistoryRouter>
      </Provider>
    );

    expect(screen.queryByText('4 places to stay in Paris')).not.toBeInTheDocument();
  });
});
