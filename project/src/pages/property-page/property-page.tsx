import { useParams } from 'react-router-dom';

import CommonHeader from '../../components/common-header/common-header';
import PageNotFound from '../../components/page-not-found/page-not-found';
import MainItemCard from '../../components/main-item-card/main-item-card';
import Map from '../../components/map/map';
import PropertiesGallery from '../../components/properties-gallery/properties-gallery';
import PropertiesDescriptions from '../../components/properties-descriptions/properties-descriptions';

import type { CardsProps, Point } from '../../types/types';

const MAP_CLASS_NAME = 'property__map';

const HeaderOptions = {
  isLogged: false,
};

function PropertyPage({ cards }: CardsProps): JSX.Element {
  const { selectedCard } = useParams<string>();
  const cardId = Number(selectedCard);

  const card = cards.filter((item) => item.cardId === cardId);
  const cardsView: JSX.Element[] = cards.slice(0, 3).map((item) => <MainItemCard card={item} key={item.cardId} selectPath />);

  const points = cards.map((item) => {
    const container: Point = {
      lat: item.location.latitude,
      lng: item.location.longitude,
      title: item.title,
    };

    return container;
  });


  const point = () => {
    const { location, title } = card[0];
    if (card) {
      return {
        lat: Number(location.latitude),
        lng: Number(location.longitude),
        title: String(title),
      };
    }
    return undefined;
  };

  if (!card.length) {
    return <PageNotFound />;
  }
  else {
    const { title, images } = card[0];
    return (
      <div className="page">
        <CommonHeader isLogged={HeaderOptions.isLogged} />
        <main className="page__main page__main--property">
          <section className="property">
            <PropertiesGallery images={images} title={title} />
            <PropertiesDescriptions card={card} />
            <Map className={MAP_CLASS_NAME} city={card[0].city} points={points} selectedPoint={point()} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {cardsView}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export default PropertyPage;
