import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AuthorizationStatus } from '../../const';
import { ReviewSection } from './review-section';
import { mockComments } from '../../utils/mocks';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const fakeApp = (storeForComponent: MockStore) => (
  <Provider store={storeForComponent}>
    <HistoryRouter history={history}>
      <ReviewSection />
    </HistoryRouter>
  </Provider>
);

describe('component: ReviewSection', () => {
  it('should render ReviewSection for authorized user', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.Auth },
      DATA: { comments: mockComments }
    });
    render(fakeApp(store));

    expect(screen.getByText('Your review')).toBeInTheDocument();
    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
  });

  it('should render ReviewSection for non-authorized user', () => {
    const store = mockStore({
      USER: { authorizationStatus: AuthorizationStatus.NoAuth },
      DATA: { comments: mockComments }
    });
    render(fakeApp(store));

    expect(screen.queryByText('Your review')).not.toBeInTheDocument();
    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
  });
});
