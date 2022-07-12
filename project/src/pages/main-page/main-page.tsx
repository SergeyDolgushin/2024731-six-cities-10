import CommonHeader from '../../components/common-header/common-header';
import MainItemCard from '../../components/main-item-card/main-item-card';
import CardsSectionMainPage from '../../components/cards-section-main-page/cards-section';
import EmptyMainPage from '../../components/empty-main-page/empty-main-page';

import type { CardsProps } from '../../types/types';


const VisibilityOptions = {
  isLogged: true,
  isEmpty: false
};

type cards = JSX.Element[];


function MainPage({ cards }: CardsProps): JSX.Element {
  const { isLogged, isEmpty } = VisibilityOptions;
  const cardsView: cards = cards.map((item, i) => <MainItemCard card={item} key={item.cardId} />);

  return (
    <div className="page page--gray page--main">
      <CommonHeader isLogged={isLogged} />
      {isEmpty ? <EmptyMainPage /> : <CardsSectionMainPage cardsView={cardsView} />}
    </div>
  );
}
export default MainPage;
