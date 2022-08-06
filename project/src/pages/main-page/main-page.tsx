import { useAppSelector } from '../../hooks';

import { CommonHeader } from '../../components/common-header/common-header';
import { CardsList } from '../../components/cards-list/cards-list';
import { EmptyMainPage } from '../../components/empty-main-page/empty-main-page';

import { MainSection } from '../../components/main-section/main-section';
import { CitiesTabs } from '../../components/cities-tabs/cities-tabs';
import { useFilter } from '../../hooks';
import ErrorMessage from '../../components/error-message/error-message';


function MainPage(): JSX.Element {
  const { isDataLoaded, offers } = useAppSelector((state) => state);
  const cardsOfCity = useFilter(offers);
  const isEmpty = (cardsOfCity.length === 0 && !isDataLoaded);

  return (
    <div className="page page--gray page--main">
      <CommonHeader />
      <ErrorMessage />
      <MainSection isEmpty={isEmpty}>
        <CitiesTabs />
        {isEmpty ? <EmptyMainPage /> : <CardsList cards={cardsOfCity} />}
      </MainSection>
    </div>
  );
}
export { MainPage };
