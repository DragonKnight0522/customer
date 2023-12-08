import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 uppercase">CART</h1>
      <h2 className="text-white bg-light-blue-500 mb-8 p-4 font-bold">
        <p>A Minimum of USD175.00 is required before checking out.</p>
        <p>{`Current cart's total: USD20.00`}</p>
      </h2>
      <table className="w-full cart-table">
        <thead className="md:table-header-group hidden">
          <tr style={{borderWidth: '1px'}} className="border-gray-300 text-gray-600 text-left">
            <th className="w-1/12 p-3"></th>
            <th className="w-1/12 p-3"></th>
            <th className="w-4/12 p-3">Product</th>
            <th className="w-2/12 p-3">Price</th>
            <th className="w-2/12 p-3">Quantity</th>
            <th className="w-2/12 p-3">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {new Array(3).fill(1).map((pro, idx) => (
            <tr key={`pro_${idx}`} className="font-semibold md:border-t-white border-t-gray-300 border-l-gray-300 border-r-gray-300 border-b-gray-300 block md:table-row" style={{borderWidth: '1px'}}>
              <td className="md:table-cell block w-full md:w-1/12 p-3 before:block md:before:hidden text-right md:text-left border-b-gray-300" style={{borderBottomWidth: '1px'}} data-title="">
                <span className="w-6 h-6 flex text-red-600 rounded-full cursor-pointer hover:text-white hover:bg-red-600">
                  <FontAwesomeIcon icon={faTimes} className="m-auto" />
                </span>
              </td>
              <td className="md:table-cell hidden w-full md:w-1/12 p-3 before:block md:before:hidden text-right md:text-left border-b-gray-300" style={{borderBottomWidth: '1px'}} data-title="">
                <Image src={'/images/Mockup_Product.webp'} height={200} width={200} alt='' />
              </td>
              <td className="md:table-cell block w-full md:w-4/12 p-3 before:block md:before:hidden text-right md:text-left border-b-gray-300" style={{borderBottomWidth: '1px'}} data-title="Product">
                <Link href={"/product/detail"} className="text-green-500">Raspberry Kush</Link>
              </td>
              <td className="md:table-cell block w-full md:w-2/12 p-3 before:block md:before:hidden text-right md:text-left border-b-gray-300" style={{borderBottomWidth: '1px'}} data-title="Price">$20.00</td>
              <td className="md:table-cell block w-full md:w-2/12 p-3 before:block md:before:hidden text-right md:text-left border-b-gray-300" style={{borderBottomWidth: '1px'}} data-title="Quantity">
                <input type="number" className="outline-none w-16 py-3 px-2 bg-gray-100 text-gray-600 md:me-5 me-0" defaultValue={1} />
              </td>
              <td className="md:table-cell block w-full md:w-2/12 p-3 before:block md:before:hidden text-right md:text-left border-b-gray-300" data-title="Subtotal">$480.00</td>
            </tr>
          ))}
          <tr>
            <td colSpan={6} className="font-semibold border-gray-300 p-3" style={{borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px'}}>
              <div className="md:flex justify-between">
                <div className="grid md:flex grid-cols-2 md:gap-0 gap-x-10 mb-4 md:mb-0">
                  <div>
                    <input placeholder='Coupon code' className="outline-none md:w-36 w-full py-3 px-2 bg-gray-100 text-gray-600 me-5" defaultValue={1} />
                  </div>
                  <div>
                    <button className="group w-full md:w-auto inline-block hover:border-transparent border-2 border-black hover:bg-gray-100 py-2 px-5 rounded-full transition-all hover:px-4">
                      <span className="font-semibold text-xl">Apply coupon</span>
                      <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
                    </button>
                  </div>
                </div>
                <button className="group w-full md:w-auto inline-block hover:border-transparent border-2 border-black hover:bg-gray-100 py-2 px-5 transition-all hover:px-4">
                  <span className="font-semibold text-xl">Update cart</span>
                  <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        <div className="lg:block hidden"></div>
        <div>
          <h1 className="text-3xl font-bold my-4 uppercase">CART TOTALS</h1>
          <table className="w-full mb-8">
            <tbody className="font-semibold">
              <tr style={{borderWidth: '1px'}} className="border-gray-300 text-gray-600 text-left">
                <td className="w-1/3 p-3">Subtotal</td>
                <td className="w-2/3 p-3 text-black">$550.00</td>
              </tr>
              <tr style={{borderWidth: '1px'}} className="border-gray-300 text-gray-600 text-left">
                <td className="w-1/3 p-3">Subtotal</td>
                <td className="w-2/3 p-3 text-black">$550.00</td>
              </tr>
            </tbody>
          </table>
          <Link href={"/checkout"} className="group text-center block w-full hover:border-transparent border-2 border-black rounded-full hover:bg-gray-100 py-2 px-5 transition-all hover:px-4 my-3">
            <span className="font-semibold text-xl">Proceed to checkout</span>
            <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default page;
