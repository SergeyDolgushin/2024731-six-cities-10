import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus, FilterType } from '../../const';
import { PropertyPage } from './property-page';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { makeFakeOffer, makeFakeOffers, mockComments } from '../../utils/mocks';
import { ID_FOR_TEST } from '../../components/loading-screen/constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const history = createMemoryHistory();

describe('Component: PropertyPage', () => {

  it('should render proper "PropertyPage"', async () => {
    const fakeOffers = makeFakeOffers();
    const fakeOffer = makeFakeOffer();
    const fakeOffersNearby = makeFakeOffers();

    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { isDataLoaded: false, offers: fakeOffers, offer: fakeOffer, offersNearby: fakeOffersNearby, comments: mockComments },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PropertyPage />
        </HistoryRouter>
      </Provider >
    );

    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();
    expect(screen.getAllByText(fakeOffer.goods[0]).length).toBe(fakeOffer.goods.length);
    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();

  });

  it('should render proper "PropertyPage" if data is loading', async () => {
    const fakeOffers = makeFakeOffers();
    const fakeOffer = makeFakeOffer();
    const fakeOffersNearby = makeFakeOffers();

    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { isDataLoaded: true, offers: fakeOffers, offer: fakeOffer, offersNearby: fakeOffersNearby, comments: mockComments },
      FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
    });

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <PropertyPage />
        </HistoryRouter>
      </Provider >
    );

    expect(screen.queryByText(fakeOffer.title)).not.toBeInTheDocument();
    expect(screen.queryByText(mockComments[0].comment)).not.toBeInTheDocument();
    expect(screen.getByTestId(ID_FOR_TEST)).toBeInTheDocument();

  });
});
