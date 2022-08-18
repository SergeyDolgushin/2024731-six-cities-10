import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import userEvent from '@testing-library/user-event';

import HistoryRouter from '../../components/history-route/history-route';
import { AuthorizationStatus, FilterType } from '../../const';
import PropertiesDescriptions from './properties-descriptions';
import { makeFakeOffer, makeFakeOffers, mockComments } from '../../utils/mocks';
import { idForTest } from './constants';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const history = createMemoryHistory();

describe('Component: PropertiesDescriptions', () => {

  it('should render proper "PropertiesDescriptions"', async () => {
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
          <PropertiesDescriptions card={fakeOffer} />
        </HistoryRouter>
      </Provider >
    );

    expect(screen.getByText(fakeOffer.title)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(idForTest));
    const actions = store.getActions();
    expect(actions[0].type).toBe('offer/status/pending');

  });
});
