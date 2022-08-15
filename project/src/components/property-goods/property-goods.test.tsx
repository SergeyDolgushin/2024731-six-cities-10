import { render, screen } from '@testing-library/react';
import { PropertyGoods } from './property-goods';


describe('Component: PropertyGoods', () => {
  it('should render correctly', () => {

    const goods = [
      'test',
      'test',
      'test',
    ];

    render(<PropertyGoods goods={goods} />);

    expect(screen.getAllByText('test').length).toBe(goods.length);
  });
});
