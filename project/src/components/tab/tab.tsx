
import { MouseEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeCity } from '../../store/action';


type TabProps = {
  name: string,
}

function Tab({ name }: TabProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.name);
  const isActive = (currentCity === name);
  const dispatch = useAppDispatch();

  const handleOnClickTab = (evt: MouseEvent<HTMLLIElement>) => {
    dispatch(changeCity({ name: String(evt.currentTarget.textContent) }));
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

export default Tab;
