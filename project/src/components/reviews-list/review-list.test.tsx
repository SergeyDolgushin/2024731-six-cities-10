import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore, MockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { ReviewsList } from './reviews-list';
import { mockComments } from '../../utils/mocks';

const mockStore = configureMockStore();

const history = createMemoryHistory();

const fakeApp = (storeForComponent: MockStore) => (
  <Provider store={storeForComponent}>
    <HistoryRouter history={history}>
      <ReviewsList />
    </HistoryRouter>
  </Provider>
);

describe('component: ReviewsList', () => {
  it('should render ReviewSection for authorized user', () => {
    const store = mockStore({
      DATA: { comments: mockComments }
    });
    render(fakeApp(store));

    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
    expect(screen.getAllByText(mockComments[0].comment).length).toBe(mockComments.length);
  });
});
