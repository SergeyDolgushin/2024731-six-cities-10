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

function MainPage({ cards }: CardsProps): JSX.Element {
  const { isLogged, isEmpty } = VisibilityOptions;

  return (
    <div className="page page--gray page--main">
      <CommonHeader isLogged={isLogged} />
      <MainSection isEmpty={isEmpty}>
        <CitiesTabs tabs={tabs} />
        {isEmpty ? <EmptyMainPage /> : <CardsList cards={cards} />}
      </MainSection>
    </div>
  );
}
export default MainPage;
