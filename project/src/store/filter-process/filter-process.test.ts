import { filterProcess, getCity } from './filter-process';
import { initialState } from '../const';
import { getFilter } from './filter-process';
import { CITIES, FilterType } from '../../const';


describe('Reducer: dataProcess', () => {
  const state = initialState.FILTER;
  it('without additional parameters should return initial state', () => {
    expect(filterProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual({
        name: state.name,
        filter: state.filter
      });
  });

  it('should return new filter', () => {
    expect(filterProcess.reducer(state, getFilter({ filter: FilterType.LOW })))
      .toEqual({
        name: state.name,
        filter: FilterType.LOW
      });
  });

  it('should return new name', () => {
    expect(filterProcess.reducer(state, getCity({ name: CITIES[1] })))
      .toEqual({
        name: CITIES[1],
        filter: state.filter
      });
  });
});
