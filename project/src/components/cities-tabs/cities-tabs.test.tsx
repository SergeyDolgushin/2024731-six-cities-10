import { configureMockStore } from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { CITIES } from '../../const';
import { CitiesTabs } from './cities-tabs';

const mockStore = configureMockStore();

const store = mockStore({
  FILTER: { name: 'Paris' },
});

describe('Component: CitiesTabs', () => {
  it('should render correctly', () => {

    render(
      <Provider store={store}>
        <CitiesTabs />
      </Provider>
    );

    expect(screen.getByText(CITIES[0])).toBeInTheDocument();
    expect(screen.getByText(CITIES[1])).toBeInTheDocument();
    expect(screen.getByText(CITIES[2])).toBeInTheDocument();
    expect(screen.getByText(CITIES[3])).toBeInTheDocument();
    expect(screen.getByText(CITIES[4])).toBeInTheDocument();
    expect(screen.getByText(CITIES[5])).toBeInTheDocument();
  });
});
