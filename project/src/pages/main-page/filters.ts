import { FilterType } from '../../const';
import type { CardsProps, Card } from '../../types/types';

const getWeightForNullDate = (rateA: number, rateB: number) => {
  if (rateA === null && rateB === null) {
    return 0;
  }

  if (rateA === null) {
    return 1;
  }

  if (rateB === null) {
    return -1;
  }

  return null;
};

const sortPriceLow = (cardA: Card, cardB: Card) => {
  const weight = getWeightForNullDate(cardA.price, cardB.price);
  return weight ?? (cardA.price - cardB.price);
};

const sortPriceHigh = (cardA: Card, cardB: Card) => {
  const weight = getWeightForNullDate(cardA.price, cardB.price);
  return weight ?? (cardB.price - cardA.price);
};

const sortRateHigh = (cardA: Card, cardB: Card) => {
  const weight = getWeightForNullDate(cardA.rating, cardB.rating);
  return weight ?? (cardB.rating - cardA.rating);
};


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
