import { CommonHeader } from '../../components/common-header/common-header';
import { CardsList } from '../../components/cards-list/cards-list';
import { EmptyMainPage } from '../../components/empty-main-page/empty-main-page';

import type { CardsProps } from '../../types/types';
import { MainSection } from '../../components/main-section/main-section';
import { CitiesTabs } from '../../components/cities-tabs/cities-tabs';
import { useAppSelector } from '../../hooks';

const VisibilityOptions = {
  isLogged: true,
};

function MainPage({ cards }: CardsProps): JSX.Element {
  const { isLogged } = VisibilityOptions;
  const currentCity = useAppSelector((state) => state.name);

  const cardsOfCity = cards.filter((card) => card.city.name === currentCity);
  const isEmpty = (cardsOfCity.length === 0);

  return (
    <div className="page page--gray page--main">
      <CommonHeader isLogged={isLogged} />
      <MainSection isEmpty={isEmpty}>
        <CitiesTabs />
        {isEmpty ? <EmptyMainPage /> : <CardsList cards={cardsOfCity} />}
      </MainSection>
    </div>
  );
}
export { MainPage };
