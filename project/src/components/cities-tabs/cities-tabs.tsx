import Tab from '../tab/tab';
import { TabsProps } from '../../types/types';

function CitiesTabs({ tabs }: TabsProps): JSX.Element {
  const tabsView: JSX.Element[] = tabs.map((item) => <Tab tab={item} key={item.id} />);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {tabsView}
        </ul>
      </section>
    </div>
  );
}

export default CitiesTabs;
