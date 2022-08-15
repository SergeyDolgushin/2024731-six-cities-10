import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { CITIES } from '../../const';
import { Tab } from './tab';

const mockStore = configureMockStore();

const store = mockStore({
  FILTER: { name: CITIES[0] },
});

describe('Component: Tab', () => {
  it('should render correctly and getCity action', async () => {

    render(
      <Provider store={store}>
        <Tab name={'Paris'} />
      </Provider>
    );

    const clickAction = screen.getByRole('listitem');
    await userEvent.click(clickAction);
    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      'FILTER/getCity'
    ]);

    expect(screen.getByText(CITIES[0])).toBeInTheDocument();
    expect(screen.queryByText(CITIES[1])).not.toBeInTheDocument();
  });
});
