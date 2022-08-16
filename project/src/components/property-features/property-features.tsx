import { memo } from 'react';

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


export default memo(PropertyFeatures, (prevProps, nextProps) => (
  prevProps.type === nextProps.type && prevProps.adults === nextProps.adults && prevProps.bedrooms === nextProps.bedrooms
));
