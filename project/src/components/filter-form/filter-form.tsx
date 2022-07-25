import { useState, FormEvent } from 'react';
import { FilterType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFilter } from '../../store/action';

const setActiveFilter = (activeFilter: string, filterType: string) => (activeFilter === filterType) ? 'places__option--active' : '';


function FormFilter(): JSX.Element {
  const [isOpen, setOpen] = useState(false);
  const currentFilter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const handleOpenMenu = () => {
    setOpen(!isOpen);
  };

  const handleSetFilter = (evt: FormEvent<HTMLElement>) => {
    const name = evt.target as HTMLElement;
    dispatch(getFilter({ filter: name.outerText }));
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleOpenMenu}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentFilter}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpen ? 'places__options--opened' : ''}`} onClick={handleSetFilter}>
        <li className={`places__option ${setActiveFilter(currentFilter, FilterType.POPULAR)}`} tabIndex={0}>{FilterType.POPULAR}</li>
        <li className={`places__option ${setActiveFilter(currentFilter, FilterType.LOW)}`} tabIndex={1}>{FilterType.LOW}</li>
        <li className={`places__option ${setActiveFilter(currentFilter, FilterType.HIGH)}`} tabIndex={2}>{FilterType.HIGH}</li>
        <li className={`places__option ${setActiveFilter(currentFilter, FilterType.TOP)}`} tabIndex={3}>{FilterType.TOP}</li>
      </ul>
    </form>
  );
}

export { FormFilter };
