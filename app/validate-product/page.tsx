import React from 'react';
import Image from "next/image";
import ValidateProduct from '../components/ValidateProduct';

const page = () => {
  return (
    <div className="row py-20">
      <h2 className="text-3xl font-bold uppercase text-center mb-2">PRODUCT VALIDATION.</h2>
      <p className="text-center font-semibold">validate your ghost extracts product.</p>
      <div className="py-24">
        <Image className="w-full" src={"/images/Screen-Shot-2023-05-21-at-12.02.18-AM-1280x526.png"} width={500} height={500} alt='' />
      </div>
      <ValidateProduct />
    </div>
  );
}

export default page;
