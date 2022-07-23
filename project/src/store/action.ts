import { createAction } from '@reduxjs/toolkit';
import { Card } from '../types/types';

const changeCity = createAction<{ name: string }>('main/changeCity');
const getOffers = createAction<{ offers: Card[] }>('main/getOffers');

export { changeCity, getOffers };
