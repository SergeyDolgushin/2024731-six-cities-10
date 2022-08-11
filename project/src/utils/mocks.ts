import { image, name, lorem, datatype } from 'faker';
import { Card } from '../types/types';

export const makeFakeOffer = (): Card => ({
  price: 100,
  rating: 1,
  images: [
    image.abstract()
  ],
  title: lorem.text(),
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

export const makeFakeOffers = (): Card[] => (
  new Array(4).fill(null).map(() => (
    makeFakeOffer()))
);
