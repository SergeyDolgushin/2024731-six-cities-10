
type GalleryProps = {
  images: string[],
  title: string,
};

function PropertiesGallery({ images, title }: GalleryProps) {
  const imagesContainer: JSX.Element[] = images.slice(0, 6).map((item) => (
    <div className="property__image-wrapper" key={item}>
      <img className="property__image" src={item} alt={title} />
    </div>
  ));

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {imagesContainer}
      </div>
    </div>
  );
}

export default PropertiesGallery;
