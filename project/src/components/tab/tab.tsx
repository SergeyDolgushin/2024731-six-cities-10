
import { TabProps } from '../../types/types';

function Tab({ tab }: TabProps): JSX.Element {
  const { isActive, name } = tab;
  const isActiveClass = `locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`;


  return (
    <li className="locations__item">
      <div style={{ 'cursor': 'pointer' }}
        className={isActiveClass}
      >
        <span>{name}</span>
      </div>
    </li>

  );
}

export default Tab;
