import FavoriteCard from '../../components/favorite-card/favorite-card';
import type { Card } from '../../types/types';

type FavoritesCitiesProps = {
  cards: Card[];
  city: string
};

function FavoritesCities({ cards, city }: FavoritesCitiesProps) {

  const cardsView = cards.map((card) => (card.isFavorite && card.city.name === city) ? <FavoriteCard card={card} key={card.cardId} /> : null);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cardsView}
      </div>
    </li>
  );
}

export { FavoritesCities };
