import { createReducer } from '@reduxjs/toolkit';
import { changeCity, getOffers } from './action';

const initialState = {
  name: 'Paris',
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

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.name = action.payload.name;
    })
    .addCase(getOffers, (state, action) => {
      state.offers = action.payload.offers;
    });
});

export { reducer };
