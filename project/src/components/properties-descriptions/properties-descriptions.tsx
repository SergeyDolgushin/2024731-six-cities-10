import { ReviewSection } from '../../components/review-section/review-section';
import { Card } from '../../types/types';
import PropertyFeatures from '../property-features/property-features';
import PropertyGoods from '../property-goods/property-goods';
import PropertyHost from '../propery-host/property-host';

type cardProps = {
  card: Card[];
};

function PropertiesDescriptions({ card }: cardProps) {
  const { isPremium, rating, goods, title, price, type, maxAdults, bedrooms } = card[0];

  return (
    <div className="property__container container">
      <div className="property__wrapper">
        <div className="property__mark">
          <span>{isPremium ? 'Premium' : ''}</span>
        </div>
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {title}
          </h1>
          <button className="property__bookmark-button button" type="button">
            <svg className="property__bookmark-icon" width="31" height="33">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{ 'width': `${rating}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{rating / 20}</span>
        </div>
        <PropertyFeatures type={type} adults={maxAdults} bedrooms={bedrooms} />
        <div className="property__price">
          <b className="property__price-value">&euro;{price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <PropertyGoods goods={goods} />
        <PropertyHost card={card} />
        <ReviewSection />
      </div>
    </div>
  );
}

export default PropertiesDescriptions;
