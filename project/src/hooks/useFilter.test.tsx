import { renderHook } from '@testing-library/react';
import { useFilter } from './useFilter';
import { makeFakeOffers } from '../utils/mocks';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { FilterType } from '../const';

type MockChildren = {
  children: JSX.Element;
}

const fakeOffers = makeFakeOffers();
const mockStore = configureMockStore();

const store = mockStore({
  FILTER: { name: 'Paris', filter: FilterType.POPULAR },
  DATA: { offers: fakeOffers }
});

const wrapper = ({ children }: MockChildren) => (
  <Provider store={store} >
    {children}
  </Provider>
);

describe('Hook: useFilter', () => {
  it('should return array', () => {

    const { result } = renderHook(() => useFilter(fakeOffers), {
      wrapper,
      initialProps: {
        cards: fakeOffers
      }
    });

    const [offer] = result.current;
    expect(result.current).toHaveLength(4);
    expect(offer).toBeInstanceOf(Object);
    expect(result.current).toBeInstanceOf(Array);
  });
});
