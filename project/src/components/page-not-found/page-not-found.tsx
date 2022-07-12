import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import './page-not-found.css';

function PageNotFound(): JSX.Element {

  return (
    <main className="page__404">
      <h1>Ошибка 404</h1>
      <div className="page__404__text">
        <p>Такой страницы не существует</p>
        <Link to={AppRoute.Root} className="locations__item-link">
          <span>Перейти на главную страницу</span>
        </Link>
      </div>
    </main>
  );
}

export default PageNotFound;
