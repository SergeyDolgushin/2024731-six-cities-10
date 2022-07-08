import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';


const roomInfos = [
  {
    price: 80,
    paymentPeriod: 'night',
    isFavorite: true,
    rating: 60,
    urlImg: 'img/room.jpg',
    name: 'Wood and stone place',
    cardId: 0,
    isPremium: true,
    type: 'Palace',
    urlPreview: 'img/apartment-small-03.jpg'
  },
  {
    price: 120,
    paymentPeriod: 'night',
    isFavorite: false,
    rating: 80,
    urlImg: 'img/apartment-01.jpg',
    name: 'luxurious apartment at great location',
    cardId: 1,
    isPremium: true,
    type: 'Appartement',
    urlPreview: 'img/apartment-small-04.jpg'
  },
  {
    price: 80,
    paymentPeriod: 'night',
    isFavorite: false,
    rating: 60,
    urlImg: 'img/room.jpg',
    name: 'White castle',
    cardId: 2,
    isPremium: true,
    type: 'Room',
    urlPreview: 'img/apartment-small-03.jpg'
  },
  {
    price: 132,
    paymentPeriod: 'night',
    isFavorite: false,
    rating: 60,
    urlImg: 'img/apartment-02.jpg',
    name: 'Canal View Prinsengracht',
    cardId: 3,
    isPremium: true,
    type: 'Boungalo',
    urlPreview: 'img/room-small.jpg'
  },
  {
    price: 180,
    paymentPeriod: 'night',
    isFavorite: false,
    rating: 30,
    urlImg: 'img/apartment-03.jpg',
    name: 'Nice, cozy, warm big bed apartment',
    cardId: 4,
    isPremium: true,
    type: 'Tent',
    urlPreview: 'img/apartment-small-04.jpg'
  },
];

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App roomInfos={roomInfos} />
  </React.StrictMode>,
);
