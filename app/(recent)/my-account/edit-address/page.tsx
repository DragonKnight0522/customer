import React from 'react';
import Link from "next/link";

const Address = () => {
  return (
    <>
      <p className="font-semibold mb-4">The following addresses will be used on the checkout page by default</p>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <div className="flex justify-between items-end mb-4">
            <h4 className="text-2xl font-semibold">BILLING ADDRESS</h4>
            <Link href={"/my-account/edit-address/billing"} className="text-green-500 italic font-semibold">Edit</Link>
          </div>
          <div className="italic font-semibold">
            <p>{`{Full Name}`}</p>
            <p>{`{Company Name}`}</p>
            <p>{`{Country / Region}`}</p>
            <p>{`{Street address}`}</p>
            <p>{`{Town City}`}</p>
            <p>{`{Country}`}</p>
            <p>{`{Postcode / ZIP}`}</p>
            <p>{`{Phone}`}</p>
            <p>{`{Email address}`}</p>
          </div>
        </div>
        <div>
          <div className="flex justify-between items-end mb-4">
            <h4 className="text-xl font-semibold">SHIPPING ADDRESS</h4>
            <Link href={"/my-account/edit-address/shipping"} className="text-green-500 italic font-semibold">ADD</Link>
          </div>
          <div className="italic font-semibold">
            <p>You have not set up this type of address yet.</p>
          </div>
        </div>
      </div>
    </>      
  );
}

export default Address;
