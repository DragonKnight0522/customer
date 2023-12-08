import React from 'react';
import Product2 from '@/app/components/common/Product2';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons/faAngleDoubleRight";
import Pagination from '@/app/components/common/Pagination';

const TorchXGhost = () => {
  return (
    <>
      <div className="font-semibold flex align-middle">
        <Link href={"/"} className="text-green-500">Home</Link>
        <span className="mx-1">
          <FontAwesomeIcon icon={faAngleDoubleRight} size="xs" />
        </span>
        <span>Torch x Ghost</span>
      </div>
      <h1 className="text-3xl font-bold">TORCH X GHOST</h1>
      <h2 className="text-3xl text-center font-semibold my-2">HOT NEW GHOST TORCH DISPOSABLE.</h2>
      <p className="font-semibold mb-4">Introducing the Torch x Ghost Collection, a series of premium live resin disposable vape pens that are sure to elevate your vaping experience. The Torch Glow THC-X Live Resin Disposable is a new standout product in this collection. This device is designed with both form and function in mind, featuring an ergonomic mouthpiece, viewing window, and a dedicated pre-heat button.</p>
      <p className="font-semibold">Each disposable contains 3.5 grams of premium live resin and is compact and portable, making it perfect for on-the-go use. The Torch x Ghost Collection is the perfect choice for those seeking a premium and convenient vaping experience.</p>
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

export default TorchXGhost;
