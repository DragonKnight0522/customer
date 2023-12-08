import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import Link from "next/link";

const Orders = () => {
  return (
    <div className="bg-light-blue-500 p-4">
      <h2 className="text-white font-bold inline-block me-8">No order has been ordered yet.</h2>
      <Link href={"/shop"} className="group inline-block border-black hover:border-transparent hover:bg-cyan-600 border-2 py-2 px-5 rounded-full transition-all hover:px-4">
        <span className="font-semibold text-xl">Browse products</span>
        <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
      </Link>
    </div>     
  );
}

export default Orders;
