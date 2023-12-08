"use client"
import React from 'react';
import RecentProduct from '../components/common/RecentProduct';

const layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className="row lg:flex block">
      <div className="lg:w-4/5 w-full lg:pe-16 pt-14 pb-8">
        {children}
      </div>
      <div className="lg:w-1/5 w-full lg:border-s-2 lg:border-gray-300 pb-8 lg:pl-8 lg:pt-14 pt-0 pl-0">
        <h4 className="text-lg font-semibold mb-2">RECENTLY VIEWED PRODUCTS</h4>
        {new Array(2).fill(1).map((pro, idx) => <RecentProduct key={`recent_${idx}`} />)}
      </div>
    </div>
  );
}

export default layout;
