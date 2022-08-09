import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';

import { loginAction } from '../../store/api-actions';
import { CommonHeader } from '../../components/common-header/common-header';
import { filterProcess } from '../../store/filter-process/filter-process';

import { AppRoute, CITIES } from '../../const';
import { AuthData } from '../../types/types';
import { MouseEventHandler } from 'react';


function LoginScreen(): JSX.Element {
  const { register, handleSubmit } = useForm<AuthData>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const randomCity = CITIES[Math.floor(Math.random() * CITIES.length)];

  const onSubmit: SubmitHandler<AuthData> = (data) => {
    dispatch(loginAction(data));
    navigate(AppRoute.Root);
  };

  const handleClickToCityButton: MouseEventHandler = () => {
    dispatch(filterProcess.actions.getCity({ name: randomCity }));
    navigate(AppRoute.Root);
  };

  return (
    <div className="page page--gray page--login">
      <CommonHeader />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  {...register('email', { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i })}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  {...register('password', { pattern: /\d(?=[A-Za-z])/i })}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <button className="locations__item-link button" onClick={handleClickToCityButton}>
                <span>{randomCity}</span>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { LoginScreen };
