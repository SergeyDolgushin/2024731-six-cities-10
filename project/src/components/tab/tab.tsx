import { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { filterProcess } from '../../store/filter-process/filter-process';
import { getCurrentCity } from '../../store/filter-process/selectors';


type TabProps = {
  name: string,
}

function Tab({ name }: TabProps): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const isActive = (currentCity === name);
  const dispatch = useAppDispatch();

  const handleOnClickTab = (evt: MouseEvent<HTMLLIElement>) => {
    dispatch(filterProcess.actions.getCity({ name: String(evt.currentTarget.textContent) }));
  };

  const isActiveClass = `locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`;

  return (
    <li className="locations__item" onClick={handleOnClickTab}>
      <div style={{ 'cursor': 'pointer' }}
        className={isActiveClass}
      >
        <span>{name}</span>
      </div>
    </li>

  );
}

export { Tab };
