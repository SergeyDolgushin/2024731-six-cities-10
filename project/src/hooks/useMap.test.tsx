import { renderHook } from '@testing-library/react';
import { useMap } from './useMap';
import { MutableRefObject } from 'react';
import { makeFakeOffer } from '../../src/utils/mocks';
import { Map } from 'leaflet';

const { city } = makeFakeOffer();
const { location } = city;
const lat = location.latitude;
const lng = location.longitude;


jest.mock('leaflet');

describe('Hook: useMap', () => {
  it('should return a map instanse with a set center location', () => {

    const ref = {
      current: {}
    } as MutableRefObject<HTMLElement>;

    const { result } = renderHook(() => useMap(ref, city));

    expect(result.current).toBeInstanceOf(Map);
    expect(result.current?.setView).toBeCalledWith(
      {
        lat,
        lng,
      },
      undefined
    );
  });
});
