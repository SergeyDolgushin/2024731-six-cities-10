import { render, screen } from '@testing-library/react';
import { PropertyFeatures } from './property-features';


describe('Component: PropertyFeatures', () => {
  it('should render correctly', () => {

    const type = 'test';
    const adultsNumber = 2;
    const bedroomsNumber = 2;

    render(<PropertyFeatures type={type} bedrooms={bedroomsNumber} adults={adultsNumber} />);

    expect(screen.getByText(`${bedroomsNumber} bedrooms`)).toBeInTheDocument();
    expect(screen.getByText(`Max ${adultsNumber} adults`)).toBeInTheDocument();
    expect(screen.getByText(type)).toBeInTheDocument();
  });
});
