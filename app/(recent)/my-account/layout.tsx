"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import PageList from '@/app/components/Account/PageList';

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

  if (pathName === "/my-account")
    return (<>{children}</>)

  return (
    <>
      <h1 className="text-3xl font-bold mb-8 uppercase">{title}</h1>
      <div className="md:flex block">
        <PageList />
        <div className="md:w-2/3 w-full">
          {children}
        </div>
      </div>
    </>
  );
}

export default AccountLayout;
