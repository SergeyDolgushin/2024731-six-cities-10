import Tab from '../tab/tab';
import { CITIES } from '../../const';

function makeTabs(): JSX.Element[] {
  return CITIES.map((name: string) => <Tab name={name} key={name} />);
}

function CitiesTabs(): JSX.Element {

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {makeTabs()}
        </ul>
      </section>
    </div>
  );
}

export { CitiesTabs };
