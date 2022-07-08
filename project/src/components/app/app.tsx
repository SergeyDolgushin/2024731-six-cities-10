import MainPage from '../../pages/main-page/main-page';
import type { CardsProps } from '../../types/types';


function App({ roomInfos }: CardsProps): JSX.Element {
  return (
    <MainPage roomInfos={roomInfos} />
  );
}

export default App;
