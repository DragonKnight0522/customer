import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';

const Product = (
  {
    thumb
  }
  :
  {
    thumb: string
  }
) => {
  return (
    <Link href={"/product/detail"}>
      <div className="productItem">
        <div className="absolute mt-2 ms-2 bg-orange-400 inline-block px-5 text-xl py-2 rounded-md font-bold text-white z-10">Sale!</div>
        <div className="relative">
          <div className="absolute w-full flex h-full justify-center items-center z-20 productMask">
            <FontAwesomeIcon icon={faCirclePlus} size="2x" className="text-cyan-500" />
          </div>
          <Image width={300} height={300} src={thumb} alt='' />
        </div>
        <h2 className="text-base font-semibold uppercase py-2">strawberry shortcake</h2>
        <span className="text-sm text-gray-500">
          <del className="text-gray-400 me-1">$50.00</del>
          <span className="font-bold">$25.00</span>
        </span>
      </div>
    </Link>
  )
}

export default Product;
