import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';

import type { Card } from '../../types/types';

type MainItemCardProps = {
  card: Card,
  handlerCardMouseOver?: (evt: MouseEvent<HTMLDivElement>) => void;
  handlerCardMouseOut?: (evt: MouseEvent<HTMLDivElement>) => void;
  selectPath?: boolean,
}

function MainItemCard({ card, handlerCardMouseOver, handlerCardMouseOut, selectPath }: MainItemCardProps): JSX.Element {
  const { price, rating, images, title, type, cardId, location } = card;
  const { longitude, latitude } = location;

  return (
    <article
      className="cities__card place-card"
      data-lat={`${latitude}`}
      data-lng={`${longitude}`}
      data-title={`${title}`}
      onMouseOver={handlerCardMouseOver}
      onMouseOut={handlerCardMouseOut}
    >
      <div className="cities__image-wrapper place-card__image-wrapper" >
        <Link to={`offer/${cardId}`} >
          <img className="place-card__image" src={images[0]} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ 'width': `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`offer/${cardId}`} >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { MainItemCard };
