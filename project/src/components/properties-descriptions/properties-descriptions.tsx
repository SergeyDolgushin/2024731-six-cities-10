import { ReviewSection } from '../../components/review-section/review-section';
import { Card } from '../../types/types';

type cardProps = {
  card: Card[];
};

function PropertiesDescriptions({ card }: cardProps) {
  const { isPremium, description, rating, goods, title } = card[0];

  const propertiesGoods: JSX.Element[] = goods.map((item) => (
    <li className="property__inside-item" key={item}>
      {item}
    </li>
  ));

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
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            Apartment
          </li>
          <li className="property__feature property__feature--bedrooms">
            3 Bedrooms
          </li>
          <li className="property__feature property__feature--adults">
            Max 4 adults
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">&euro;120</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {propertiesGoods}
          </ul>
        </div>
        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <div className="property__host-user user">
            <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
              <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
            </div>
            <span className="property__user-name">
              Angelina
            </span>
            <span className="property__user-status">
              Pro
            </span>
          </div>
          <div className="property__description">
            <p className="property__text">
              {description}
            </p>
            <p className="property__text">
              An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.
            </p>
          </div>
        </div>
        <ReviewSection />
      </div>
    </div>
  );
}

export { PropertiesDescriptions };
