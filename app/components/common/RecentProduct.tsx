import React from 'react';
import Link from "next/link";
import Image from "next/image";

const RecentProduct = () => {
  return (
    <div className="pb-6">
      <Link href={"/product/detail"} className="flex justify-between text-gray-700 hover:text-green-500">
        <p className="font-semibold">Ghost Train Haze Ghost Extracts</p>
        <p>
          <Image className="w-8 h-auto ms-2" src={"/images/Mockup_Product.webp"} height={80} width={80} alt='' />
        </p>
      </Link>
      <p className="font-semibold mt-2">
        <del>$50.00</del>
        <span className="ms-2">$20.00</span>
      </p>
    </div>
  );
}

export default RecentProduct;
