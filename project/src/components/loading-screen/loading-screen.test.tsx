import { render, screen } from '@testing-library/react';
import { idForTest } from './constants';
import { LoadingScreen } from './loading-screen';


describe('Component: EmptyMainPage', () => {
  it('should render correctly', () => {

    render(<LoadingScreen />);

    expect(screen.getByTestId(idForTest)).toBeInTheDocument();
  });
});
