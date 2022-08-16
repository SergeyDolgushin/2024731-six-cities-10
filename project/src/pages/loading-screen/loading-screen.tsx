import { FadeLoader } from 'react-spinners';

function LoadingScreen(): JSX.Element {
  return (
    <div style={{ margin: 'auto' }} data-testid={'loader'}>
      <FadeLoader
        color="#375e7b"
        height={28}
        margin={25}
      />
    </div>
  );
}

export { LoadingScreen };
