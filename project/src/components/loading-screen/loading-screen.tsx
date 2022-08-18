import { FadeLoader } from 'react-spinners';
import { ID_FOR_TEST } from './constants';

function LoadingScreen(): JSX.Element {
  return (
    <div style={{ margin: 'auto' }} data-testid={ID_FOR_TEST}>
      <FadeLoader
        color="#375e7b"
        height={28}
        margin={25}
      />
    </div>
  );
}

export { LoadingScreen };
