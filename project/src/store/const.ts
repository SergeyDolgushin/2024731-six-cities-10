import { FilterType, AuthorizationStatus, NameSpace } from '../const';

const initialState = {
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Unknown,
  },
  [NameSpace.Filter]: {
    name: 'Paris',
    filter: FilterType.POPULAR,
  },
  [NameSpace.Data]: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    isError: false,
    userComment: '',
    offers: [
      {
        price: 0,
        isFavorite: false,
        rating: 0,
        images: [''],
        title: '',
        id: 0,
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
    ],
    offersNearby: [
      {
        price: 0,
        isFavorite: false,
        rating: 0,
        images: [''],
        title: '',
        id: 0,
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
    ],
    offer:
    {
      price: 0,
      isFavorite: false,
      rating: 0,
      images: [''],
      title: '',
      id: 0,
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
    },

    comments: [
      {
        comment: '',
        date: '',
        id: 0,
        rating: 0,
        user: {
          avatarUrl: '',
          id: 0,
          isPro: false,
          name: '',
        }
      }
    ],
  }
};

export { initialState };
