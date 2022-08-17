import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AuthorizationStatus, FilterType } from '../../const';
import { FilterForm } from './filter-form';
import { Provider } from 'react-redux';

import userEvent from '@testing-library/user-event';
import { initialState } from '../../store/const';

describe('Component: FormFilter', () => {
  const mockStore = configureMockStore();

  const store = mockStore({
    USER: { authorizationStatus: AuthorizationStatus.Auth },
    DATA: { isDataLoaded: false, offers: initialState.DATA.offers },
    FILTER: { name: 'Paris', filter: FilterType.POPULAR, },
  });
  it('should render proper', () => {

    render(
      <Provider store={store}>
        <FilterForm />
      </Provider >
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
    expect(screen.getAllByText(FilterType.POPULAR).length).toBe(2);

  });

  it('should call handler', async () => {

    render(
      <Provider store={store}>
        <FilterForm />
      </Provider >
    );

    await userEvent.click(screen.getByRole('list'));
    const actions = store.getActions();
    expect(actions[0].type).toBe('FILTER/getFilter');

  });

});
