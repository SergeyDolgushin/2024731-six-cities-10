import { render, screen } from '@testing-library/react';
import { Map } from './map';
import { makeFakeOffer, makeFakeOffers } from '../../utils/mocks';
import { Point } from '../../types/types';
import { idForTest } from './constants';


const points = makeFakeOffers().map((item) => {
  const container: Point = {
    lat: item.location.latitude,
    lng: item.location.longitude,
    title: item.title,
  };

  return container;
});

const point = (): Point => {
  const { location, title } = makeFakeOffer();
  return {
    lat: Number(location.latitude),
    lng: Number(location.longitude),
    title: String(title),
  };
};

describe('Component: Map', () => {
  it('should render map-section correctly', () => {
    render(<Map className='class' points={points} selectedPoint={point()} city={makeFakeOffer().city} />);

    expect(screen.getByTestId(idForTest)).toBeInTheDocument();
  });
});
