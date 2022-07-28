import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useFilter } from './useFilter';
import type { State, AppDispatch } from '../types/state';


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export { useFilter };
