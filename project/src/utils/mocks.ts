import { image, name, lorem, datatype } from 'faker';
import { Card } from '../types/types';

export const makeFakeOffer = (): Card => ({
  price: 100,
  rating: 1,
  images: [
    image.abstract()
  ],
  title: lorem.word(10) + lorem.word(10),
  id: datatype.number(500),
  isFavorite: false,
  isPremium: false,
  type: 'type',
  previewImage: image.abstract(),
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
  host: {
    avatarUrl: image.avatar(),
    id: datatype.number(500),
    isPro: true,
    name: name.firstName(),
  },
  description: lorem.text(),
  bedrooms: 3,
});

export const makeFakeOfferforPropertiesPage = (): Card => ({
  price: 100,
  rating: 1,
  images: [
    image.abstract()
  ],
  title: lorem.text(),
  id: 1,
  isFavorite: false,
  isPremium: false,
  type: 'type',
  previewImage: image.abstract(),
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
    'text1', 'text2'
  ],
  maxAdults: 2,
  host: {
    avatarUrl: image.avatar(),
    id: datatype.number(500),
    isPro: true,
    name: name.firstName(),
  },
  description: 'test for proper rendering PropertiesPage',
  bedrooms: 3,
});

export const makeFakeOfferforMainCardItem = (): Card => ({
  price: 100,
  rating: 1,
  images: [
    image.abstract()
  ],
  title: 'test for MainCardItem',
  id: 1,
  isFavorite: true,
  isPremium: false,
  type: 'type',
  previewImage: image.abstract(),
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
    'text1', 'text2'
  ],
  maxAdults: 2,
  host: {
    avatarUrl: image.avatar(),
    id: datatype.number(500),
    isPro: true,
    name: name.firstName(),
  },
  description: 'test for proper rendering PropertiesPage',
  bedrooms: 3,
});

export const makeFakeOffers = (): Card[] => (
  new Array(4).fill(null).map(() => (
    makeFakeOffer()))
);

export const makeFakeOffersForFavorites = (): Card[] => (
  new Array(4).fill(null).map(() => (
    makeFakeOfferforMainCardItem()))
);


export const mockComments = [
  {
    comment: 'userComment',
    rating: 1,
    id: 1,
    date: 'Sun Aug 14 2022 20:29:45 GMT+0300 (Москва, стандартное время)',
    user:
    {
      id: 1,
      name: 'TestName',
      isPro: true,
      avatarUrl: 'testPath'
    }
  }
];
