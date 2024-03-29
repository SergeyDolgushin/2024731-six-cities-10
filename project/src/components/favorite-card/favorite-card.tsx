import { MouseEvent } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../hooks';
import { fetchOffersAction, setStatus } from '../../store/api-actions';
import type { CardProps } from '../../types/types';
import { convertRatingtoStar } from '../../utils/converter';


function FavoriteCard({ card }: CardProps): JSX.Element {
  const { price, rating, title, previewImage, type, id, isFavorite } = card;

  const dispatch = useAppDispatch();

  const handleOnChangeStatus = (evt: MouseEvent) => {
    dispatch(setStatus({ id, isFavorite }));
    dispatch(fetchOffersAction());
  };

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Offer, { selectedCard: String(id) })} >
          <img
            className="place-card__image"
            src={previewImage} width="150"
            height="110"
            alt={`${title}`}
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
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
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ 'width': `${convertRatingtoStar(rating)}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Offer, { selectedCard: String(id) })} >
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article >

  );
}

export { FavoriteCard };
