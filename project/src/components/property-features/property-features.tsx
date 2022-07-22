type PropertyFeaturesProps = {
  type: string,
  bedrooms: number,
  adults: number
};

function PropertyFeatures({ type, adults, bedrooms }: PropertyFeaturesProps) {

  return (
    <ul className="property__features">
      <li className="property__feature property__feature--entire">
        {type}
      </li>
      <li className="property__feature property__feature--bedrooms">
        {`${bedrooms} bedrooms`}
      </li>
      <li className="property__feature property__feature--adults">
        {`Max ${adults} adults`}
      </li>
    </ul>
  );
}

export { PropertyFeatures };
