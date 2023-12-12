"use client"

import React from 'react';
import { Collapse, Input, Select, Option, Checkbox, Textarea, Radio } from "@material-tailwind/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons/faAngleRight';
import { CountryRegionData } from 'react-country-region-selector';
import QRCode from 'qrcode.react';
import Link from "next/link";
import Image from "next/image";

const Checkout = () => {
  const [open, setOpen] = React.useState(false);
  const toggleOpen = () => setOpen((cur) => !cur);

  const [payment, setPayment] = React.useState("paypal");
  const qrCodeData = 'https://example.com';

  return (
    <div className="row pt-28 pb-20">
      <h2 className="text-white bg-light-blue-500 mb-8 p-4 font-bold cursor-pointer" onClick={toggleOpen}>
        Have a coupon? Click here to enter your code
      </h2>
      <Collapse open={open}>
        <div className="p-4 border-gray-300 rounded-md mb-8" style={{borderWidth: '1px'}}>
          <p className="mb-4 font-semibold">If you have a coupon code, please apply it below.</p>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16">
            <div>
              <input className="outline-none w-full py-3 px-2 bg-gray-100 text-gray-600 me-5" placeholder="Coupon code" />
            </div>
            <div className="pt-3 md:pt-0">
              <button className="group inline-block hover:border-transparent border-2 border-black hover:bg-gray-100 py-2 px-5 rounded-full transition-all hover:px-4">
                <span className="font-semibold text-xl">Apply coupon</span>
                <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>
      </Collapse>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-16">
        <div className="mb-4 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-6">BILLING DETAILS</h2>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-x-10 mb-8">
            <div className="md:mb-0 mb-8">
              <Input variant="static" label="First name *" crossOrigin={undefined} />
            </div>
            <div>
              <Input variant="static" label="Last name *" crossOrigin={undefined} />
            </div>
          </div>
          <div className="mb-8">
            <Input variant="static" label="Company name (optional)" crossOrigin={undefined} />
          </div>
          <div className="mb-8">
            <Select variant="static" label="Country / Region *" placeholder={''}>
              {CountryRegionData.map(country => <Option key={country[0]}>{country[0]}</Option>)}
            </Select>
          </div>
          <div className="mb-8">
            <Input variant="static" label="Town / City *" crossOrigin={undefined} />
            <Input variant="static" label="" crossOrigin={undefined} />
          </div>
          <div className="mb-8">
            <Input variant="static" label="Postcode / ZIP *" crossOrigin={undefined} />
          </div>
          <div className="mb-8">
            <Input variant="static" label="Phone *" crossOrigin={undefined} />
          </div>
          <div className="mb-2">
            <Input variant="static" label="Email address *" crossOrigin={undefined} />
          </div>
        </div>
        <div>
          <div className="flex items-center mb-6">
            <Checkbox label="" crossOrigin={undefined} />
            <h2 className="text-2xl font-semibold">SHIP TO A DIFFERENT ADDRESS?</h2>
          </div>
          <div className="mb-2">
            <Textarea variant="static" label="Order notes (optional)" />
          </div>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-6 mt-4">YOUR ORDER</h2>
        <table className="font-semibold w-full">
          <thead>
            <tr style={{borderWidth: '1px'}}>
              <td className="w-3/5 p-3">Product</td>
              <td className="w-2/5 p-3">Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {new Array(2).fill(1).map((pro, idx) => (
              <tr  key={`pro_${idx}`} style={{borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px'}}>
                <td className="w-3/5 p-3">Ghost Train Haze Ghost Extracts  × 20</td>
                <td className="w-2/5 p-3">$400.00</td>
              </tr>
            ))}
            <tr style={{borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px'}}>
              <td className="w-3/5 p-3">Subtotal</td>
              <td className="w-2/5 p-3">$550.00</td>
            </tr>
            <tr style={{borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px'}}>
              <td className="w-3/5 p-3">Shipping</td>
              <td className="w-2/5 p-3">Express Shipping: $25.00</td>
            </tr>
            <tr style={{borderBottomWidth: '1px', borderLeftWidth: '1px', borderRightWidth: '1px'}}>
              <td className="w-3/5 p-3">Total</td>
              <td className="w-2/5 p-3">$575.00</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-gray-200 rounded-md">
        <div className="p-3">
          <div className="flex items-center">
            <Radio className="bg-white border-gray-600" name="payment" value={"paypal"} color="light-blue" crossOrigin={undefined} onChange={e => setPayment(e.target.value)} />
            <p>Paypal</p>
          </div>
          <Collapse open={payment === "paypal"}>
            <div className="pt-3">
              <div className="relative p-4 bg-gray-300 rounded-sm mb-4 payment">
                <p className="text-gray-700">A live tracking number is provided after shipping with USP.</p>
              </div>
            </div>
          </Collapse>
          <div className="flex items-center">
            <Radio className="bg-white border-gray-600" name="payment" value={"zelle"} color="light-blue" crossOrigin={undefined} onChange={e => setPayment(e.target.value)} />
            <p>Zelle</p>
          </div>
          <Collapse open={payment === "zelle"}>
            <div className="pt-3">
              <div className="relative p-4 bg-gray-300 rounded-sm mb-4 payment">
                <p className="text-gray-700">A live tracking number is provided after shipping with USP.</p>
              </div>
            </div>
          </Collapse>
          <div className="flex items-center">
            <Radio className="bg-white border-gray-600" name="payment" value={"cashapp"} color="light-blue" crossOrigin={undefined} onChange={e => setPayment(e.target.value)} />
            <p>Cash App</p>
          </div>
          <Collapse open={payment === "cashapp"}>
            <div className="pt-3">
              <div className="relative p-4 bg-gray-300 rounded-sm mb-4 payment">
                <p className="text-gray-700 mb-3">Send <Link href={qrCodeData} style={{color: "#00d632"}}>$575.00 to $Cablanche</Link> or click/scan the Cash App button below</p>
                <p className="text-gray-700 mb-3">Please <strong>use your Order Number (available once you place order)</strong> as the payment reference.</p>
                <div className="flex items-center">
                  <p>
                    <span>Click</span>
                    <FontAwesomeIcon className="mx-1" icon={faAngleRight} size="xs" />
                  </p>
                  <Link href={qrCodeData}>
                    <Image src={"/images/cashapp.png"} width={100} height={100} alt="" />
                  </Link>
                  <p className="ms-1">
                    <span>or Scan</span>
                    <FontAwesomeIcon className="mx-1" icon={faAngleRight} size="xs" />
                  </p>
                  <Link href={qrCodeData}>
                    <QRCode value={qrCodeData} size={100} />
                  </Link>
                </div>
                <p className="text-gray-700 my-3"><strong>After paying, please come back here and place the order</strong> below so we can start processing your order.</p>
                <p className="text-gray-700">If you are having an issue, call . You can also email</p>
              </div>
            </div>
          </Collapse>
          <div className="flex items-center">
            <Radio className="bg-white border-gray-600" name="payment" value={"applepay"} color="light-blue" crossOrigin={undefined} onChange={e => setPayment(e.target.value)} />
            <p>Apple Pay</p>
          </div>
          <Collapse open={payment === "applepay"}>
            <div className="pt-3">
              <div className="relative p-4 bg-gray-300 rounded-sm mb-4 payment">
                <p className="text-gray-700">A live tracking number is provided after shipping with USP.</p>
              </div>
            </div>
          </Collapse>
        </div>
        <div className="p-6 border-gray-400 font-semibold" style={{borderTopWidth: '1px'}}>
          <p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href={"/privacy-policy"} className="text-green-500">privacy policy</Link>.</p>
          <div className="flex justify-end">
            <button className="group block hover:border-transparent border-2 border-black rounded-full hover:bg-gray-300 py-2 px-5 transition-all hover:px-4 my-3">
              <span className="font-semibold text-xl">Place order</span>
              <FontAwesomeIcon icon={faAngleRight} className="-ms-2 opacity-0 transition-all group-hover:ms-2 group-hover:opacity-100" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
