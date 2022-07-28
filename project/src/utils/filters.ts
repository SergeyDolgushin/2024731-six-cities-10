import { FilterType } from '../const';
import type { CardsProps, Card } from '../types/types';

const sortPriceLow = (cardA: Card, cardB: Card) => cardA.price - cardB.price;

const sortPriceHigh = (cardA: Card, cardB: Card) => cardB.price - cardA.price;

const sortRateHigh = (cardA: Card, cardB: Card) => cardB.rating - cardA.rating;

const getFilteredCards = (currentFilter: string, { cards }: CardsProps) => {
  const arrayForSort = [...cards];

  switch (currentFilter) {
    case FilterType.LOW:
      return arrayForSort.sort(sortPriceLow);
    case FilterType.HIGH:
      return arrayForSort.sort(sortPriceHigh);
    case FilterType.TOP:
      return arrayForSort.sort(sortRateHigh);
  }

  return cards;
};

export { getFilteredCards };
