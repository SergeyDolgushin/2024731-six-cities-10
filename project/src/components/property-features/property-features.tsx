type PropertyFeaturesProps = {
  type: string,
  bedrooms: number,
  adults: number
};

function PropertyFeatures({ type, adults, bedrooms }: PropertyFeaturesProps) {
  const propertyObject = {
    entire: type,
    bedrooms: `${bedrooms} bedrooms`,
    adults: `Max ${adults} adults`
  };

  const propertiesList: JSX.Element[] = Object.entries(propertyObject).map((item) => (
    <li className={`property__feature property__feature--${item[0]}`} key={item[0]}>
      {item[1]}
    </li>
  ));

  return (
    <ul className="property__features">
      {propertiesList}
    </ul>
  );
}

export default PropertyFeatures;
