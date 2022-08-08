import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const';
import { getUserInfo } from '../../services/token';

import './common-header.css';


function CommonHeader(): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link to={AppRoute.Root} className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
            </Link>
          </div>
          {(authorizationStatus === AuthorizationStatus.Auth) ? <UserInfo /> : <UserNotLogged />}
        </div>
      </div>
    </header>
  );
}

function UserInfo(): JSX.Element {
  const { offers } = useAppSelector((state) => state);
  const { email, userImg } = getUserInfo();

  const favoriteHotels = offers.filter((card) => card.isFavorite).length;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerLogOut = () => {
    dispatch(logoutAction());
    navigate(AppRoute.Root);
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              <img className="header__avatar-wrapper header__avatar-wrapper-img" src={userImg} alt="avatar" />
            </div>
            <span className="header__user-name user__name">{email}</span>
            <span className="header__favorite-count">{favoriteHotels}</span>
          </Link>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="/#">
            <span className="header__signout" onClick={handlerLogOut}>Sign out</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

function UserNotLogged(): JSX.Element {
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__login">Sign in</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { CommonHeader };
