import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { LoginScreen } from './login-screen';
import HistoryRouter from '../../components/history-route/history-route';

import { AppRoute } from '../../const';
import { store } from '../../store';
import { ID_TEST_EMAIL, ID_TEST_PASSWORD } from './constants';


describe('Component: LoginScreen', () => {
  it('should render "LoginScreen" correctly', async () => {
    const history = createMemoryHistory();
    history.push(AppRoute.Login);

    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <LoginScreen />
        </HistoryRouter>
      </Provider>,
    );

    expect(screen.getByText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByText(/Password/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId(ID_TEST_EMAIL), 'userEmail');
    await userEvent.type(screen.getByTestId(ID_TEST_PASSWORD), 'userPassword');

    expect(screen.getByDisplayValue(/userEmail/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/userPassword/i)).toBeInTheDocument();
  });
});
