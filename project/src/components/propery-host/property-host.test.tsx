import { render, screen } from '@testing-library/react';
import { PropertyHost } from './property-host';


describe('Component: PropertyHost', () => {
  it('should render correctly', () => {

    const offer = {
      host: {
        avatarUrl: 'test',
        id: 1,
        isPro: true,
        name: 'testName',
      },
      description: 'lorem.text()',
      price: 100,
      rating: 1,
      images: [
        'test'
      ],
      title: 'test',
      id: 2,
      isFavorite: false,
      isPremium: false,
      type: 'type',
      previewImage: 'test',
      location: {
        latitude: 22,
        longitude: 22,
        zoom: 10,
      },
      city: {
        location: {
          latitude: 22,
          longitude: 22,
          zoom: 10,
        },
        name: 'Paris'
      },
      goods: [
        'text', 'text'
      ],
      maxAdults: 2,
      bedrooms: 2
    };

    render(<PropertyHost card={offer} />);

    expect(screen.getByText(offer.description)).toBeInTheDocument();
    expect(screen.getByText(offer.host.name)).toBeInTheDocument();
  });
});
