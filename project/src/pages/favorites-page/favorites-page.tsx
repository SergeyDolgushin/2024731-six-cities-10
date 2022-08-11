import { CommonHeader } from '../../components/common-header/common-header';
import { FavoritesCities } from '../../components/favorites-cities/favorites-cities';
import { FavoritesEmpty } from '../../components/favorites-empty/favorites-empty';

import type { CardsProps } from '../../types/types';

function FavoritesPage({ cards }: CardsProps): JSX.Element {
  const cities = cards.map((item) => item.isFavorite ? item.city.name : null);
  const currentCities = new Set(cities);
  const favoritesPlaces: JSX.Element[] = [];

  function favorites() {
    currentCities.forEach((item) => {
      if (item) {
        favoritesPlaces.push(<FavoritesCities cards={cards} city={item} key={item} />);
      }
    });

    return (
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {favoritesPlaces}
        </ul>
      </section>
    );
  }

  return (
    <div className="page">
      <CommonHeader />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {currentCities.size !== 1 ? favorites() : FavoritesEmpty()}
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export { FavoritesPage };
