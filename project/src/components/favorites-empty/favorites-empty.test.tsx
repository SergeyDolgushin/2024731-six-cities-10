import { render, screen } from '@testing-library/react';
import { FavoritesEmpty } from './favorites-empty';

describe('Component: CitiesTabs', () => {
  it('should render correctly', () => {

    render(<FavoritesEmpty />);

    expect(screen.getByText('Save properties to narrow down search or plan your future trips.')).toBeInTheDocument();
  });
});
