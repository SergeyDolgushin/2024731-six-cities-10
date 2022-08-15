import { render, screen } from '@testing-library/react';
import { EmptyMainPage } from './empty-main-page';

const city = 'Paris';

describe('Component: EmptyMainPage', () => {
  it('should render correctly', () => {

    render(<EmptyMainPage currentCity={city} />);

    expect(screen.getByText(`We could not find any property available at the moment in ${city}`)).toBeInTheDocument();
  });
});
