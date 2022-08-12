import { NameSpace } from '../../const';
import { State } from '../../types/state';


export const getCurrentCity = (state: State) => state[NameSpace.Filter].name;
export const getFilter = (state: State) => state[NameSpace.Filter].filter;
