import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';

const ValidateProduct = () => {
  return (
    <div>
      <div style={{boxShadow: "0px 2px 18px 0px #000"}} className="mb-8">
        <input className="outline-none w-full py-3 px-4 bg-gray-100 text-gray-600" placeholder='Enter Genuine Product Code' />
      </div>
      <div style={{boxShadow: "0px 2px 18px 0px #000"}} className="mb-8">
        <input className="outline-none w-full py-3 px-4 bg-gray-100 text-gray-600" placeholder='First Name' />
      </div>
      <div style={{boxShadow: "0px 2px 18px 0px #000"}} className="mb-8">
        <input className="outline-none w-full py-3 px-4 bg-gray-100 text-gray-600" placeholder='Last Name' />
      </div>
      <div className="flex justify-end items-center">
        <span className="font-bold">8 + 4 =</span>
        <input className="outline-none w-12 py-3 px-4 bg-gray-100 text-gray-600 ms-2 me-4" placeholder='' style={{boxShadow: "0px 2px 18px 0px #000"}} />
        <button className="inline-block group bg-black text-white py-2 px-5 rounded-full transition-all hover:px-4">
          <span className="font-semibold text-xl">Submit</span>
          <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  );
}

export default ValidateProduct;
