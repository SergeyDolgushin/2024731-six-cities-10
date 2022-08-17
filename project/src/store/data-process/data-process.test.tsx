import { dataProcess } from './data-process';
import { makeFakeOffer, makeFakeOffers, mockComments } from '../../utils/mocks';
import { fetchOffersAction, fetchOfferAction, fetchOffersNearbyAction, fetchCommentsAction, setStatus, sendComment } from '../api-actions';
import { initialState } from '../const';

const offer = makeFakeOffer();
const offers = makeFakeOffers();

describe('Reducer: dataProcess', () => {
  const state = initialState.DATA;
  it('without additional parameters should return initial state', () => {
    expect(dataProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: true,
        isError: false,
        offer: state.offer,
        offersNearby: state.offersNearby,
        comments: state.comments,
        userComment: state.userComment
      });
  });

  it('should update offers by load offers', () => {

    expect(dataProcess.reducer(state, { type: fetchOffersAction.fulfilled.type, payload: offers }))
      .toEqual({
        offers,
        isDataLoaded: false,
        isError: false,
        offer: state.offer,
        offersNearby: state.offersNearby,
        comments: state.comments,
        userComment: state.userComment
      });
  });

  it('should update isDataloaded during load offers', () => {

    expect(dataProcess.reducer(state, { type: fetchOffersAction.pending.type, payload: offers }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: true,
        isError: false,
        offer: state.offer,
        offersNearby: state.offersNearby,
        comments: state.comments,
        userComment: state.userComment
      });
  });

  it('should update offer by load offer', () => {

    expect(dataProcess.reducer(state, { type: fetchOfferAction.fulfilled.type, payload: offer }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: false,
        isError: false,
        offer,
        offersNearby: state.offersNearby,
        comments: state.comments,
        userComment: state.userComment
      });
  });

  it('should update offersNearby by load offersNearby', () => {

    expect(dataProcess.reducer(state, { type: fetchOffersNearbyAction.fulfilled.type, payload: offers }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: false,
        isError: false,
        offer: state.offer,
        offersNearby: offers,
        comments: state.comments,
        userComment: state.userComment
      });
  });

  it('should update comments by load comments', () => {

    expect(dataProcess.reducer(state, { type: fetchCommentsAction.fulfilled.type, payload: mockComments }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: false,
        isError: false,
        offer: state.offer,
        offersNearby: state.offersNearby,
        comments: mockComments,
        userComment: state.userComment
      });
  });

  it('should update favorite state of card', () => {

    expect(dataProcess.reducer(state, { type: setStatus.fulfilled.type, payload: offer }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: false,
        isError: false,
        offer,
        offersNearby: state.offersNearby,
        comments: state.comments,
        userComment: state.userComment
      });
  });

  it('should update isDataloaded state for setStatus pending', () => {

    expect(dataProcess.reducer(state, { type: setStatus.pending.type, payload: offer }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: true,
        isError: false,
        offer: state.offer,
        offersNearby: state.offersNearby,
        comments: state.comments,
        userComment: state.userComment
      });
  });

  it('should update comments after sent user comment', () => {

    expect(dataProcess.reducer(state, { type: sendComment.fulfilled.type, payload: mockComments }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: false,
        isError: false,
        offer: state.offer,
        offersNearby: state.offersNearby,
        comments: mockComments,
        userComment: state.userComment
      });
  });

  it('should update isDataloaded after sent user comment', () => {

    expect(dataProcess.reducer(state, { type: sendComment.pending.type }))
      .toEqual({
        offers: state.offers,
        isDataLoaded: true,
        isError: false,
        offer: state.offer,
        offersNearby: state.offersNearby,
        comments: state.comments,
        userComment: state.userComment
      });
  });

});
