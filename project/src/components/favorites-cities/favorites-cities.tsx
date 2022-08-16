import { FavoriteCard } from '../../components/favorite-card/favorite-card';
import type { Card } from '../../types/types';

type FavoritesCitiesProps = {
  cards: Card[];
  city: string
};

const makeCardsViews = ({ cards, city }: FavoritesCitiesProps) => (
  cards.map((card) => (card.isFavorite && card.city.name === city) ? <FavoriteCard card={card} key={card.id} /> : null)
);

function FavoritesCities({ cards, city }: FavoritesCitiesProps) {

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
        {makeCardsViews({ cards, city })}
      </div>
    </li>
  );
}

export { FavoritesCities };
