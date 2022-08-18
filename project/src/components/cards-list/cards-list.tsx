import { MainItemCard } from '../../components/main-item-card/main-item-card';
import { FilterForm } from '../filter-form/filter-form';
import { Map } from '../map/map';
import { MAP_CLASS_NAME } from '../../const';

import type { CardsProps, Point, Card } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { MouseEvent, useEffect, useState } from 'react';
import { LoadingScreen } from '../loading-screen/loading-screen';

const makeCurrentPoint = (currentCardId: DOMStringMap | null) => {
  if (currentCardId) {
    return {
      lat: Number(currentCardId.lat),
      lng: Number(currentCardId.lng),
      title: String(currentCardId.title),
    };
  }
  return undefined;
};

const makePointsContainer = (cards: Card[]) => (
  cards.map((card) => {
    const container: Point = {
      lat: card.location.latitude,
      lng: card.location.longitude,
      title: card.title,
    };

    return container;
  })
);


function CardsList({ cards }: CardsProps): JSX.Element {
  const { isDataLoaded } = useAppSelector((state) => state.DATA);
  const [currentCardId, setCardId] = useState<DOMStringMap | null>(null);
  const [currentCard, setCard] = useState<Point | undefined>(undefined);

  const handlerCardMouseOver = (evt: MouseEvent<HTMLDivElement>) => {
    setCardId(evt.currentTarget.dataset);
  };

  const handlerCardMouseOut = (evt: MouseEvent<HTMLDivElement>) => {
    if (evt.currentTarget !== evt.target) {
      setCardId(null);
    }
  };

  const cardsView: JSX.Element[] = cards.map((item) => (
    <MainItemCard
      card={item}
      key={item.id}
      onCardMouseOver={handlerCardMouseOver}
      onCardMouseOut={handlerCardMouseOut}
    />
  ));

  useEffect(() => {
    setCard(makeCurrentPoint(currentCardId));
  }, [currentCardId]);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="cities" id={`${currentCardId}`}>
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{cards.length} places to stay in {cards[0].city.name}</b>
          <FilterForm />
          <div className="cities__places-list places__list tabs__content">
            {cardsView}
          </div>
        </section>
        <div className="cities__right-section">
          <Map className={MAP_CLASS_NAME} city={cards[0].city} points={makePointsContainer(cards)} selectedPoint={currentCard} />
        </div>
      </div>
    </div>
  );
}

export { CardsList };
