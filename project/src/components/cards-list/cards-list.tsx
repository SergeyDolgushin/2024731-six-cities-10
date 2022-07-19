import MainItemCard from '../../components/main-item-card/main-item-card';
import FormFilter from '../filter-form/filter-form';
import Map from '../map/map';

import type { CardsProps } from '../../types/types';
import { MouseEvent, useState } from 'react';

function CardsList({ cards }: CardsProps): JSX.Element {
  const [currentCardId, setCardId] = useState(0);

  const handlerCardMouseOver = (evt: MouseEvent<HTMLDivElement>) => {
    setCardId(Number(evt.currentTarget.id));
  };

  const cardsView: JSX.Element[] = cards.map((item, i) => <MainItemCard card={item} key={item.cardId} handlerCardMouseOver={handlerCardMouseOver} />);
  const points = [{ 'lat': cards[0].location.latitude, 'lng': cards[0].location.longitude, 'title': cards[0].title }];
  const point = { 'lat': cards[0].location.latitude, 'lng': cards[0].location.longitude, 'title': cards[0].title };

  return (
    <div className="cities" id={`${currentCardId}`}>
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">312 places to stay in Amsterdam</b>
          <FormFilter />
          <div className="cities__places-list places__list tabs__content">
            {cardsView}
          </div>
        </section>
        <div className="cities__right-section">

          <Map city={cards[0].city} points={points} selectedPoint={point} />

        </div>
      </div>
    </div>
  );
}

export default CardsList;
