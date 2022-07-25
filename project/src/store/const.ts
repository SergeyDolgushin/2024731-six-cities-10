import { FilterType } from '../const';

const initialState = {
  name: 'Paris',
  filter: FilterType.POPULAR,
  offers: [
    {
      price: 0,
      isFavorite: false,
      rating: 0,
      images: [''],
      title: '',
      cardId: 0,
      isPremium: false,
      type: '',
      previewImage: '',
      location: {
        'latitude': 0,
        'longitude': 0,
        'zoom': 0
      },
      city: {
        'name': '',
        'location': {
          'latitude': 0,
          'longitude': 0,
          'zoom': 0
        }
      },
      goods: [''],
      maxAdults: 0,
      host: {
        id: 0,
        name: '',
        isPro: false,
        avatarUrl: ''
      },
      description: '',
      bedrooms: 0
    }
  ]
};

export { initialState };
