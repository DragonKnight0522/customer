import React from 'react';
import Product2 from '@/app/components/common/Product2';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import Pagination from '@/app/components/common/Pagination';

const GhostCarts = () => {
  return (
    <>
      <div className="font-semibold flex align-middle">
        <Link href={"/"} className="text-green-500">Home</Link>
        <span className="mx-1">
          <FontAwesomeIcon icon={faAngleDoubleRight} size="xs" />
        </span>
        <span>Ghost Carts</span>
      </div>
      <h1 className="text-3xl font-bold">GHOST CARTS</h1>
      <div className="flex justify-between my-5">
        <p className="text-sm text-gray-500">Showing 1-9 of 32 results</p>
        <select className="outline-none bg-gray-200 text-gray-600 py-1 ps-2 pe-1 text-sm rounded-md">
          <option value="popularity">Sort by popularity</option>
          <option value="latest">Sort by latest</option>
          <option value="low to high">Sort by price: low to high</option>
          <option value="high to low">Sort by price: high to low</option>
        </select>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-2 gap-12 pb-16">
        {new Array(9).fill(1).map((product, idx) => <Product2 key={`product_${idx}`} thumb='/images/Mockup_Product.webp' />)}
      </div>
      <Pagination />
    </>
  );
}

export default GhostCarts;
