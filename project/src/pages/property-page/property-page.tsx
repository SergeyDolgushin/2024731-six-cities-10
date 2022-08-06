import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { CommonHeader } from '../../components/common-header/common-header';
import { PageNotFound } from '../../components/page-not-found/page-not-found';
import { MainItemCard } from '../../components/main-item-card/main-item-card';
import { Map } from '../../components/map/map';
import PropertiesGallery from '../../components/properties-gallery/properties-gallery';
import { PropertiesDescriptions } from '../../components/properties-descriptions/properties-descriptions';

import { fetchOfferAction, fetchOffersNearbyAction, fetchCommentsAction } from '../../store/api-actions';
import { store } from '../../store';

import type { Card, Point } from '../../types/types';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../loading-screen/loading-screen';

const MAP_CLASS_NAME = 'property__map';

const makeOffersNearby = (isExist: number, offers: Card[]) => (
  isExist ? offers.map((item) => <MainItemCard card={item} key={item.id} selectPath />) : null
);

function PropertyPage(): JSX.Element {
  const { offer, offersNearby, isDataLoaded, error } = useAppSelector((state) => state);
  const { selectedCard } = useParams<string>();
  const [localError, setLocalError] = useState<boolean>(false);

  useEffect(() => {
    store.dispatch(fetchOfferAction(String(selectedCard)));
    store.dispatch(fetchOffersNearbyAction(String(selectedCard)));
    store.dispatch(fetchCommentsAction(String(selectedCard)));
  }, [selectedCard]);

  useEffect(() => {
    if (error !== null) {
      setLocalError(true);
    }
  }, [error, setLocalError]);

  const points = offersNearby.map((item) => {
    const container: Point = {
      lat: item.location.latitude,
      lng: item.location.longitude,
      title: item.title,
    };

    return container;
  });

  const point = (): Point => {
    const { location, title } = offer;
    return {
      lat: Number(location.latitude),
      lng: Number(location.longitude),
      title: String(title),
    };
  };

  points.push(point());

  if (localError) {
    return <PageNotFound />;
  }
  else {
    const { title, images } = offer;
    return (
      <div className="page">
        <CommonHeader />
        <main className="page__main page__main--property">
          <section className="property">
            {isDataLoaded ?
              <LoadingScreen /> :
              <>
                <PropertiesGallery images={images} title={title} />
                <PropertiesDescriptions card={offer} />
              </>}
            <Map className={MAP_CLASS_NAME} city={offer.city} points={points} selectedPoint={point()} />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {makeOffersNearby(offersNearby.length, offersNearby)}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

export { PropertyPage };
