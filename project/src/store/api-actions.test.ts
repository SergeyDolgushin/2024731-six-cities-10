import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../services/api';
import { checkAuthAction, fetchOffersAction, loginAction, logoutAction, sendComment } from './api-actions';
import { APIRoute } from '../const';
import { State } from '../types/state';
import { AuthData, UserComment } from '../types/types';
import { makeFakeOffers } from '../utils/mocks';

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

  it('should dispatch sendComments when POST /send/comment', async () => {
    const fakeComment: UserComment = { comment: 'userComment', rating: 1, selectedCard: '1' };
    const fakeReply = [
      {
        comment: 'userComment',
        rating: 1,
        id: 1,
        user:
        {
          id: 1,
          name: 'TestName',
          isPro: true,
          avatarUrl: 'testPath'
        }
      }
    ];

    mockAPI
      .onPost(APIRoute.Offers)
      .reply(200, { fakeReply });

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(sendComment(fakeComment));

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      sendComment.pending.type,
      sendComment.rejected.type
    ]);
  });

  it('should dispatch offers when GET /offers', async () => {
    const mockOffers = makeFakeOffers();

    mockAPI
      .onGet(APIRoute.Offers)
      .reply(200, mockOffers);

    const store = mockStore();

    await store.dispatch(fetchOffersAction());

    const actions = store.getActions().map(({ type }) => type);

    expect(actions).toEqual([
      fetchOffersAction.pending.type,
      fetchOffersAction.fulfilled.type,
    ]);
  });
});
