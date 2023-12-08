import React from 'react';
import RecentProducts from '../components/RecentProducts';

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
        <RecentProducts />
      </div>
    </div>
  );
}

export default layout;