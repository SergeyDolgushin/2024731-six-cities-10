import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus, FilterType } from '../../const';
import { makeFakeOfferforMainCardItem } from '../../utils/mocks';
import { MainItemCard } from './main-item-card';
import { Provider } from 'react-redux';
import { fetchOffersAction, setStatus } from '../../store/api-actions';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = mockStore({
  USER: { authorizationStatus: AuthorizationStatus.Auth },
  DATA: { isDataLoaded: false, offer: makeFakeOfferforMainCardItem() },
  FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
});

const history = createMemoryHistory();

describe('Application Routing', () => {
  it('should render proper "MainItemCard" for offer', async () => {
    const onMouseOverAction = jest.fn();
    const onMouseOutAction = jest.fn();

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <MainItemCard card={makeFakeOfferforMainCardItem()} key={1} onCardMouseOver={onMouseOverAction} onCardMouseOut={onMouseOutAction} />
        </HistoryRouter>
      </Provider >
    );

    fireEvent.mouseOver(screen.getByRole('article'));
    expect(onMouseOverAction).toBeCalledTimes(1);
    fireEvent.mouseOut(screen.getByRole('article'));
    expect(onMouseOutAction).toBeCalledTimes(1);
    expect(screen.getByText(/test for MainCardItem/i)).toBeInTheDocument();

    const clickAction = screen.getByRole('button');
    await userEvent.click(clickAction);
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      setStatus.pending.type,
      fetchOffersAction.pending.type,
      setStatus.rejected.type,
      fetchOffersAction.rejected.type,
    ]);
  });
});
