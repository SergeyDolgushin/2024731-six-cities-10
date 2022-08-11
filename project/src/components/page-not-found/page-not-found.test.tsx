import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import HistoryRouter from '../history-route/history-route';
import { AppRoute } from '../../const';
import { PageNotFound } from './page-not-found';

const mockStore = configureMockStore();
const history = createMemoryHistory();
const store = mockStore({});


describe('Component: PageNotFound', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Routes>
            <Route
              path={AppRoute.PageNotFound}
              element={<PageNotFound />}
            />
          </Routes>
        </HistoryRouter>
      </Provider>);

    expect(screen.getByText(/Ошибка 404/i)).toBeInTheDocument();
    expect(screen.getByText('Перейти на главную страницу', { selector: 'span' })).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', AppRoute.Root);
  });
});
