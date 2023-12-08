"use client"
import React from 'react';
import RecentProduct from '../components/common/RecentProduct';
import { usePathname } from 'next/navigation';
import PageList from '../components/Account/PageList';

const AccountLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const pathName = usePathname();
  let title = '';
  if (pathName.startsWith("/my-account/dashboard")) title = 'dashboard';
  if (pathName.startsWith("/my-account/downloads")) title = 'downloads';
  if (pathName.startsWith("/my-account/orders")) title = 'orders';
  if (pathName.startsWith("/my-account/edit-address")) title = 'addresses';
  if (pathName.startsWith("/my-account/edit-account")) title = 'account details';

  return (
    <div className="row lg:flex block">
      <div className="lg:w-4/5 w-full lg:pe-16 pt-14 pb-8">
        {pathName.startsWith("/my-account/") ?
          <>
            <h1 className="text-3xl font-bold mb-8 uppercase">{title}</h1>
            <div className="md:flex block">
              <PageList />
              <div className="md:w-2/3 w-full">
                {children}
              </div>
            </div>
          </>
          :
          children
        }
      </div>
      <div className="lg:w-1/5 w-full lg:border-s-2 lg:border-gray-300 pb-8 lg:pl-8 lg:pt-14 pt-0 pl-0">
        {pathName.startsWith("/my-account/") && <>
          <h4 className="text-lg font-semibold mb-2">RECENTLY VIEWED PRODUCTS</h4>
          {new Array(2).fill(1).map((pro, idx) => <RecentProduct key={`recent_${idx}`} />)}
        </>}
      </div>
    </div>
  );
}

export default AccountLayout;
