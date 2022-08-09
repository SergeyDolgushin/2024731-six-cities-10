import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { checkAuthAction, loginAction, logoutAction } from './api-actions';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { AuthData } from '../types/types';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI
      .onGet(APIRoute.Login)
      .reply(200, []);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const fakeUser: AuthData = { email: 'test@test.ru', password: '123456' };

    mockAPI
      .onPost(APIRoute.Login)
      .reply(200, { token: 'secret', id: '1', avatarUrl: 'path', email: 'test@test.ru' });


    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(loginAction(fakeUser));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(4);
    expect(Storage.prototype.setItem).toBeCalledWith('user-cix-cities-token', 'secret');
    expect(Storage.prototype.setItem).toBeCalledWith('user-cix-cities-email', 'test@test.ru');
    expect(Storage.prototype.setItem).toBeCalledWith('user-cix-cities-img', 'path');
    expect(Storage.prototype.setItem).toBeCalledWith('user-cix-cities-id', '1');
  });

  it('should dispatch Logout when Delete /logout', async () => {
    mockAPI
      .onDelete(APIRoute.Logout)
      .reply(204);

    const store = mockStore();
    Storage.prototype.removeItem = jest.fn();

    await store.dispatch(logoutAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      logoutAction.pending.type,
      logoutAction.fulfilled.type
    ]);

    expect(Storage.prototype.removeItem).toBeCalledTimes(4);
    expect(Storage.prototype.removeItem).toBeCalledWith('user-cix-cities-token');
    expect(Storage.prototype.removeItem).toBeCalledWith('user-cix-cities-email');
    expect(Storage.prototype.removeItem).toBeCalledWith('user-cix-cities-img');
    expect(Storage.prototype.removeItem).toBeCalledWith('user-cix-cities-id');
  });
});
