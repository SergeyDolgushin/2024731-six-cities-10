import { memo } from 'react';

type PropertyGoodsProps = {
  goods: string[]
};

function PropertyGoods({ goods }: PropertyGoodsProps) {
  const goodsProperties: JSX.Element[] = goods.map((item) => (
    <li className="property__inside-item" key={item}>
      {item}
    </li>
  ));

  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goodsProperties}
      </ul>
    </div>
  );
}

export default memo(PropertyGoods, (prevProps, nextProps) => prevProps.goods[0] === nextProps.goods[0]);
