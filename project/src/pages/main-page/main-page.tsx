import CommonHeader from '../../components/common-header/common-header';
import CardsList from '../../components/cards-list/cards-list';
import EmptyMainPage from '../../components/empty-main-page/empty-main-page';

import type { CardsProps } from '../../types/types';
import MainSection from '../../components/main-section/main-section';
import CitiesTabs from '../../components/cities-tabs/cities-tabs';
import { tabs } from '../../const';


const VisibilityOptions = {
  isLogged: true,
  isEmpty: false
};

const currentCity = {
  name: 'Dusseldorf'
};

function MainPage({ cards }: CardsProps): JSX.Element {
  const { isLogged, isEmpty } = VisibilityOptions;

  const cardsOfCity = cards.filter((card) => card.city.name === currentCity.name);
  VisibilityOptions.isEmpty = (cardsOfCity.length === 0);

  return (
    <div className="page page--gray page--main">
      <CommonHeader isLogged={isLogged} />
      <MainSection isEmpty={isEmpty}>
        <CitiesTabs tabs={tabs} />
        {isEmpty ? <EmptyMainPage /> : <CardsList cards={cardsOfCity} />}
      </MainSection>
    </div>
  );
}
export default MainPage;
