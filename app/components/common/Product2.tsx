import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons/faCirclePlus';

const Product2 = (
  {
    thumb
  }
  :
  {
    thumb: string
  }
) => {
  return (
    <div className="productItem">
      <div className="absolute mt-2 ms-2 bg-orange-400 inline-block px-5 text-xl py-2 rounded-md font-bold text-white z-10">Sale!</div>
        <Image width={300} height={300} src={thumb} alt='' />
      <h2 className="text-base font-semibold uppercase py-2">strawberry shortcake</h2>
      <span className="text-sm text-gray-500">
        <del className="text-gray-400 me-1">$50.00</del>
        <span className="font-bold">$25.00</span>
      </span>
    </div>
  )
}

export default Product2;