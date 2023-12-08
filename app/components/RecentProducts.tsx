import React from 'react';
import RecentProduct from './common/RecentProduct';

const RecentProducts = () => {
  return (
    <>
      <h4 className="text-lg font-semibold mb-2">RECENTLY VIEWED PRODUCTS</h4>
      {new Array(2).fill(1).map((pro, idx) => <RecentProduct key={`recent_${idx}`} />)}
    </>
  );
}

export default RecentProducts;
