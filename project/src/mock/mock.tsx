const roomInfos = [
  {
    price: 80,
    isFavorite: true,
    rating: 100,
    images: [
      'https://10.react.pages.academy/static/hotel/13.jpg',
      'https://10.react.pages.academy/static/hotel/10.jpg',
      'https://10.react.pages.academy/static/hotel/3.jpg',
      'https://10.react.pages.academy/static/hotel/20.jpg',
      'https://10.react.pages.academy/static/hotel/15.jpg',
      'https://10.react.pages.academy/static/hotel/19.jpg'
    ],
    title: 'Wood and stone place',
    cardId: 0,
    isPremium: true,
    type: 'Palace',
    previewImage: 'img/apartment-small-03.jpg',
    location: {
      'latitude': 48.843610000000005,
      'longitude': 2.351499,
      'zoom': 13
    },
    city: {
      'name': 'Paris',
      'location': {
        'latitude': 48.85661,
        'longitude': 2.351499,
        'zoom': 13
      }
    },
    goods: [
      'Laptop friendly workspace',
      'Washer',
      'Breakfast',
      'Air conditioning'
    ],
    maxAdults: 2,
    host: {
      id: 1,
      name: 'Jhon Beam',
      isPro: false,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: '1',
    bedrooms: 2
  },
  {
    price: 120,
    paymentPeriod: 'night',
    isFavorite: false,
    rating: 80,
    images: ['img/apartment-01.jpg'],
    title: 'luxurious apartment at great location',
    cardId: 1,
    isPremium: true,
    type: 'Appartement',
    previewImage: 'img/apartment-small-04.jpg',
    location: {
      'latitude': 51.225402,
      'longitude': 6.706314,
      'zoom': 13
    },
    city: {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    goods: ['air', 'table', 'Laptop friendly workspace'],
    maxAdults: 2,
    host: {
      id: 1,
      name: 'Jhon',
      isPro: true,
      avatarUrl: ''
    },
    description: '2',
    bedrooms: 2
  },
  {
    price: 80,
    paymentPeriod: 'night',
    isFavorite: true,
    rating: 60,
    images: ['img/room.jpg'],
    title: 'White castle',
    cardId: 2,
    isPremium: false,
    type: 'Room',
    previewImage: 'img/apartment-small-03.jpg',
    location: {
      'latitude': 51.225402,
      'longitude': 6.996314,
      'zoom': 13
    },
    city: {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    goods: ['air', 'table', 'dish'],
    maxAdults: 2,
    host: {
      id: 1,
      name: 'Jhon',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: '3',
    bedrooms: 2
  },
  {
    price: 132,
    paymentPeriod: 'night',
    isFavorite: false,
    rating: 60,
    images: ['img/apartment-02.jpg'],
    title: 'Canal View Prinsengracht',
    cardId: 3,
    isPremium: true,
    type: 'Boungalo',
    previewImage: 'img/room-small.jpg',
    location: {
      'latitude': 51.225402,
      'longitude': 6.476314,
      'zoom': 13
    },
    city: {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    goods: ['air', 'table'],
    maxAdults: 2,
    host: {
      id: 1,
      name: 'Jhon',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Dolorum eius, veniam temporibus perferendis sapiente laboriosam ipsa blanditiis consequatur natus non magnam accusamus consequuntur placeat quos possimus officia, voluptatum laborum commodi!',
    bedrooms: 2
  },
  {
    price: 180,
    paymentPeriod: 'night',
    isFavorite: true,
    rating: 30,
    images: [
      'https://10.react.pages.academy/static/hotel/8.jpg',
      'https://10.react.pages.academy/static/hotel/6.jpg',
      'https://10.react.pages.academy/static/hotel/5.jpg',
      'https://10.react.pages.academy/static/hotel/14.jpg',
      'https://10.react.pages.academy/static/hotel/1.jpg',
      'https://10.react.pages.academy/static/hotel/4.jpg',
      'https://10.react.pages.academy/static/hotel/7.jpg',
    ],
    title: 'Nice, cozy, warm big bed apartment',
    cardId: 4,
    isPremium: true,
    type: 'Tent',
    previewImage: 'img/apartment-small-04.jpg',
    location: {
      'latitude': 51.235402,
      'longitude': 6.576314,
      'zoom': 13
    },
    city: {
      'name': 'Dusseldorf',
      'location': {
        'latitude': 51.225402,
        'longitude': 6.776314,
        'zoom': 13
      }
    },
    goods: ['air', 'table'],
    maxAdults: 2,
    host: {
      id: 1,
      name: 'Jhon',
      isPro: false,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: '5',
    bedrooms: 2
  },
];

const comments = [{
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: 'Tue Jul 19 2022 16:34:34 GMT+0700 (Новосибирск, стандартное время)',
  id: 13,
  rating: 4,
  user: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 6,
    isPro: true,
    name: 'Ann'
  }
}, {
  comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius, veniam temporibus perferendis sapiente laboriosam ipsa blanditiis consequatur natus non magnam accusamus consequuntur placeat quos possimus officia, voluptatum laborum commodi! Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  date: 'Tue Jul 19 2022 22:47:34 GMT+0700 (Новосибирск, стандартное время)',
  id: 1,
  rating: 3.8,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 1,
    isPro: false,
    name: 'Oliver'
  }
}, {
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  date: 'Mon Dec 11 2022 18:31:34 GMT+0700 (Новосибирск, стандартное время)',
  id: 2,
  rating: 2.4,
  user: {
    avatarUrl: 'img/avatar-max.jpg',
    id: 2,
    isPro: true,
    name: 'Walter White'
  }
}, {
  comment: ' Dolorum eius, veniam temporibus perferendis sapiente laboriosam ipsa blanditiis consequatur natus non magnam accusamus consequuntur placeat quos possimus officia, voluptatum laborum commodi!',
  date: 'Sat Jan 27 2021 10:04:34 GMT+0700 (Новосибирск, стандартное время)',
  id: 3,
  rating: 4.6,
  user: {
    avatarUrl: 'img/avatar-angelina.jpg',
    id: 3,
    isPro: false,
    name: 'Angelina'
  }
}];

export { roomInfos, comments };
