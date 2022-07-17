import { useParams } from 'react-router-dom';

import CommonHeader from '../../components/common-header/common-header';
import PageNotFound from '../../components/page-not-found/page-not-found';
import MainItemCard from '../../components/main-item-card/main-item-card';
import type { CardsProps } from '../../types/types';
import { PropertiesGallery } from '../../components/properties-gallery/properties-gallery';
import { PropertiesDescriptions } from '../../components/properties-descriptions/properties-descriptions';


const HeaderOptions = {
  isLogged: false,
};

function PropertyPage({ cards }: CardsProps): JSX.Element {
  const { selectedCard } = useParams<string>();
  const cardId = Number(selectedCard);

  const card = cards.filter((item) => item.cardId === cardId);
  const cardsView: JSX.Element[] = cards.slice(0, 3).map((item) => <MainItemCard card={item} key={item.cardId} selectPath />);

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
            <section className="property__map map"></section>
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
