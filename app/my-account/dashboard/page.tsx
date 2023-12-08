import React from 'react';
import Link from "next/link";

const Dashboard = () => {
  return (
    <>
      <p className="font-semibold mb-6">Hello {`username`} (not {`username`}? <Link href={'/my-account/customer-logout'} className="text-green-500">Log out</Link>)</p>
      <p className="font-semibold">From your account dashboard you can view your <Link href={'/my-account/orders'} className="text-green-500">recent orders</Link>, manage your <Link href={'/my-account/edit-address'} className="text-green-500">shipping and billing addresses</Link>, and <Link href={'/my-account/edit-account'} className="text-green-500">edit your password and account details</Link>.</p>
    </>
  );
}

export default Dashboard;
