import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus, FilterType } from '../../const';
import { MainPage } from './main-page';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { initialState } from '../../store/const';
import { makeFakeOffers } from '../../utils/mocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const history = createMemoryHistory();

describe('Component: MainPage', () => {
  it('should render proper empty screen if offers is empty', async () => {

    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { isDataLoaded: false, offers: initialState.DATA.offers },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider >
    );

    expect(screen.getByTestId('page__main--index-empty')).toBeInTheDocument();
    expect(screen.getByText('We could not find any property available at the moment in Paris')).toBeInTheDocument();

  });

  it('should render proper "MainItemCard" if offers is exist', async () => {
    const fakeOffers = makeFakeOffers();
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { isDataLoaded: false, offers: fakeOffers },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainPage />
        </HistoryRouter>
      </Provider >
    );

    expect(screen.queryByTestId('page__main--index-empty')).not.toBeInTheDocument();
    expect(screen.getByText(fakeOffers[0].title)).toBeInTheDocument();

  });
});
