import { useEffect, useState } from 'react';
import { CommonHeader } from '../../components/common-header/common-header';
import { CardsList } from '../../components/cards-list/cards-list';
import { EmptyMainPage } from '../../components/empty-main-page/empty-main-page';

import type { CardsProps } from '../../types/types';
import { MainSection } from '../../components/main-section/main-section';
import { CitiesTabs } from '../../components/cities-tabs/cities-tabs';
import { useAppSelector } from '../../hooks';
import { getFilteredCards } from './filters';

const VisibilityOptions = {
  isLogged: true,
};

function MainPage({ cards }: CardsProps): JSX.Element {
  const { isLogged } = VisibilityOptions;
  const [currentCards, setCards] = useState([...cards]);
  const filter = useAppSelector((state) => state.filter);
  const currentCity = useAppSelector((state) => state.name);

  useEffect(() => {
    setCards([...cards]);
  }, [cards]);

  useEffect(() => {
    const filteredCards = getFilteredCards(filter, { cards });
    setCards([...filteredCards]);
  }, [filter]);

  const cardsOfCity = currentCards.filter((card) => card.city.name === currentCity);
  const isEmpty = (cardsOfCity.length === 0);

  return (
    <div className="page page--gray page--main">
      <CommonHeader isLogged={isLogged} />
      <MainSection isEmpty={isEmpty}>
        <CitiesTabs />
        {isEmpty ? <EmptyMainPage /> : <CardsList cards={cardsOfCity} />}
      </MainSection>
    </div>
  );
}
export { MainPage };
