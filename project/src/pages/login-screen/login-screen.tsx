import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { loginAction } from '../../store/api-actions';
import { CommonHeader } from '../../components/common-header/common-header';
import { filterProcess } from '../../store/filter-process/filter-process';

import { AppRoute, AuthorizationStatus, CITIES } from '../../const';
import { AuthData } from '../../types/types';
import { MouseEventHandler, useEffect } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { ERROR_MESSAGE_PASSWORD, ID_TEST_EMAIL, ID_TEST_PASSWORD } from './constants';


function LoginScreen(): JSX.Element {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthData>({
    criteriaMode: 'all'
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    if (authStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authStatus, navigate]);

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
                  data-testid={ID_TEST_EMAIL}
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  {...register('password',
                    {
                      required: 'This input is required.',
                      pattern: {
                        value: /(?=.*[0-9])(?=.*[A-Za-z])[0-9a-zA-Z]{2,}/i,
                        message: ERROR_MESSAGE_PASSWORD
                      },

                    })
                  }
                  className="login__input form__input"
                  data-testid={ID_TEST_PASSWORD}
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
                <ErrorMessage
                  errors={errors}
                  name="password"
                  render={({ messages }) => messages
                    ? Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                    : null}
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
