type PropertyGoodsProps = {
  goods: string[]
};

function PropertyGoods({ goods }: PropertyGoodsProps) {
  const propertiesGoods: JSX.Element[] = goods.map((item) => (
    <li className="property__inside-item" key={item}>
      {item}
    </li>
  ));

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {propertiesGoods}
      </ul>
    </div>
  );
}

export default PropertyGoods;
