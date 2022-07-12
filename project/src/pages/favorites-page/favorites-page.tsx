import CommonHeader from '../../components/common-header/common-header';
import FavoriteCard from '../../components/favorite-card/favorite-card';

import type { CardsProps } from '../../types/types';

const HeaderOptions = {
  isLogged: true
};


function FavoritesPage({ cards }: CardsProps): JSX.Element {
  const cardsView = cards.map((item, i) => <FavoriteCard card={item} key={item.cardId} />);

  return (
    <div className="page">
      <CommonHeader isLogged={HeaderOptions.isLogged} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {cardsView}
                </div>
              </li>
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

export default FavoritesPage;
