import { CommonHeader } from '../../components/common-header/common-header';
import { FavoritesCities } from '../../components/favorites-cities/favorites-cities';

import type { CardsProps } from '../../types/types';

const HeaderOptions = {
  isLogged: true
};


function FavoritesPage({ cards }: CardsProps): JSX.Element {
  const cities = cards.map((item) => item.isFavorite ? item.city.name : null);
  const currentCities = new Set(cities);
  const favoritesPlaces: JSX.Element[] = [];

  currentCities.forEach((item) => {
    if (item) {
      favoritesPlaces.push(<FavoritesCities cards={cards} city={item} key={item} />);
    }
  });

  return (
    <div className="page">
      <CommonHeader isLogged={HeaderOptions.isLogged} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesPlaces}
            </ul>
          </section>
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
