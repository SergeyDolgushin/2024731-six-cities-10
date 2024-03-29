import { memo } from 'react';
import { useAppSelector } from '../../hooks';
import { LoadingScreen } from '../loading-screen/loading-screen';
import { ID_FOR_TEST } from './constants';

type GalleryProps = {
  images: string[],
  title: string,
};

const makeImagesContainer = ({ images, title }: GalleryProps): JSX.Element[] => (
  images.slice(0, 6).map((item) => (
    <div className="property__image-wrapper" key={item}>
      <img className="property__image" src={item} alt={title} data-testid={ID_FOR_TEST} />
    </div>
  )
  ));

function PropertiesGallery({ images, title }: GalleryProps) {
  const { isDataLoaded } = useAppSelector((state) => state.DATA);

  if (isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {makeImagesContainer({ images, title })}
      </div>
    </div>
  );
}

export default memo(PropertiesGallery, (prevProps, nextProps) => prevProps.images[0] === nextProps.images[0]);
