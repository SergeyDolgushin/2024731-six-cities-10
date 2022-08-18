import { FadeLoader } from 'react-spinners';
import { idForTest } from './constants';

function LoadingScreen(): JSX.Element {
  return (
    <div style={{ margin: 'auto' }} data-testid={idForTest}>
      <FadeLoader
        color="#375e7b"
        height={28}
        margin={25}
      />
    </div>
  );
}

export { LoadingScreen };
