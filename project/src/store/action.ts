import { createAction } from '@reduxjs/toolkit';
import { Card } from '../types/types';
import { Name, Filter } from './types';

const changeCity = createAction<{ name: Name }>('main/changeCity');
const getOffers = createAction<{ offers: Card[] }>('main/getOffers');
const getFilter = createAction<{ filter: Filter }>('main/getFilter');

export { changeCity, getOffers, getFilter };
