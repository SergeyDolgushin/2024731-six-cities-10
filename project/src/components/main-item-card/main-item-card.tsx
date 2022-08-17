import { generatePath, Link } from 'react-router-dom';
import { MouseEvent } from 'react';

import type { Card } from '../../types/types';
import { convertRatingtoStar } from '../../utils/converter';
import { useAppDispatch } from '../../hooks';
import { setStatus, fetchOffersAction } from '../../store/api-actions';
import { AppRoute } from '../../const';

type MainItemCardProps = {
  card: Card,
  onCardMouseOver?: (evt: MouseEvent<HTMLDivElement>) => void;
  onCardMouseOut?: (evt: MouseEvent<HTMLDivElement>) => void;
}

function MainItemCard({ card, onCardMouseOver, onCardMouseOut }: MainItemCardProps): JSX.Element {
  const { price, rating, images, title, type, id, location, isFavorite } = card;
  const { longitude, latitude } = location;

  const dispatch = useAppDispatch();

  const handleOnChangeStatus = (evt: MouseEvent) => {
    dispatch(setStatus({ id, isFavorite }));
    dispatch(fetchOffersAction());
  };

  return (
    <article
      className="cities__card place-card"
      data-lat={`${latitude}`}
      data-lng={`${longitude}`}
      data-title={`${title}`}
      onMouseOver={onCardMouseOver}
      onMouseOut={onCardMouseOut}
    >
      <div className="cities__image-wrapper place-card__image-wrapper" >
        <Link to={generatePath(AppRoute.Offer, { selectedCard: String(id) })} >
          <img className="place-card__image" src={images[0]} width="260" height="200" alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`}
            onClick={handleOnChangeStatus}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ 'width': `${convertRatingtoStar(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { selectedCard: String(id) })} >{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export { MainItemCard };
