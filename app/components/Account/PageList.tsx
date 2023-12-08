import React from 'react';
import Link from "next/link";

const PageList = () => {
  return (
    <div className="md:w-1/3 w-full md:mb-0 mb-6">
      <ul>
        <li className="mb-1 flex items-center">
          <span className="inline-block w-2 h-2 me-2 rounded-full bg-black"></span>
          <Link href={"/my-account/dashboard"} className="text-green-500 font-semibold">Dashboard</Link>
        </li>
        <li className="mb-1 flex items-center">
          <span className="inline-block w-2 h-2 me-2 rounded-full bg-black"></span>
          <Link href={"/my-account/orders"} className="text-green-500 font-semibold">Orders</Link>
        </li>
        <li className="mb-1 flex items-center">
          <span className="inline-block w-2 h-2 me-2 rounded-full bg-black"></span>
          <Link href={"/my-account/downloads"} className="text-green-500 font-semibold">Downloads</Link>
        </li>
        <li className="mb-1 flex items-center">
          <span className="inline-block w-2 h-2 me-2 rounded-full bg-black"></span>
          <Link href={"/my-account/edit-address"} className="text-green-500 font-semibold">Addresses</Link>
        </li>
        <li className="mb-1 flex items-center">
          <span className="inline-block w-2 h-2 me-2 rounded-full bg-black"></span>
          <Link href={"/my-account/edit-account"} className="text-green-500 font-semibold">Account details</Link>
        </li>
        <li className="mb-1 flex items-center">
          <span className="inline-block w-2 h-2 me-2 rounded-full bg-black"></span>
          <Link href={"/my-account/customer-logout"} className="text-green-500 font-semibold">Log out</Link>
        </li>
      </ul>
    </div>
  );
}

export default PageList;
