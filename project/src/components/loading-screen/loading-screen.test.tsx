import { render, screen } from '@testing-library/react';
import { ID_FOR_TEST } from './constants';
import { LoadingScreen } from './loading-screen';


describe('Component: EmptyMainPage', () => {
  it('should render correctly', () => {

    render(<LoadingScreen />);

    expect(screen.getByTestId(ID_FOR_TEST)).toBeInTheDocument();
  });
});
